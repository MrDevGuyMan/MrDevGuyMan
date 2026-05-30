(function () {
  const GAME_SLUG = "bubble-bash";
  const LOGIN_URL = "/login";
  const LEADERBOARD_URL = "/leaderboards/bubble-bash";
  const MAX_METADATA_KEYS = new Set([
    "food",
    "ai",
    "survival",
    "combo",
    "winBonus",
    "arenaCleared",
    "finalSize",
    "rank",
  ]);

  let lastSubmissionFingerprint = null;

  console.info("[BubbleBashBridge] score-bridge.js loaded");

  function ensureStatusHost() {
    let host = document.getElementById("mrdevguyman-score-status");

    if (host) {
      return host;
    }

    host = document.createElement("div");
    host.id = "mrdevguyman-score-status";
    host.setAttribute("aria-live", "polite");
    host.style.position = "fixed";
    host.style.left = "16px";
    host.style.right = "16px";
    host.style.bottom = "16px";
    host.style.display = "flex";
    host.style.justifyContent = "center";
    host.style.pointerEvents = "none";
    host.style.zIndex = "9999";
    document.body.appendChild(host);
    return host;
  }

  function renderStatus(message, options) {
    const host = ensureStatusHost();
    const card = document.createElement("div");
    card.style.maxWidth = "34rem";
    card.style.width = "100%";
    card.style.pointerEvents = "auto";
    card.style.border = "1px solid rgba(212, 175, 55, 0.28)";
    card.style.borderRadius = "18px";
    card.style.background = "rgba(12, 10, 8, 0.94)";
    card.style.boxShadow = "0 18px 40px rgba(0, 0, 0, 0.34)";
    card.style.padding = "14px 16px";
    card.style.color = "#f4efe4";
    card.style.fontFamily = "\"Manrope\", system-ui, sans-serif";
    card.style.fontSize = "14px";
    card.style.lineHeight = "1.6";

    const text = document.createElement("div");
    text.textContent = message;
    card.appendChild(text);

    if (options && options.linkHref && options.linkLabel) {
      const link = document.createElement("a");
      link.href = options.linkHref;
      link.textContent = options.linkLabel;
      link.style.display = "inline-flex";
      link.style.alignItems = "center";
      link.style.marginTop = "10px";
      link.style.color = "#f4e7c1";
      link.style.fontWeight = "700";
      link.style.textDecoration = "none";
      link.style.pointerEvents = "auto";
      card.appendChild(link);
    }

    host.replaceChildren(card);
  }

  function sanitizeMetadata(metadata) {
    if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
      return undefined;
    }

    const sanitized = {};

    for (const [key, value] of Object.entries(metadata)) {
      if (!MAX_METADATA_KEYS.has(key)) {
        continue;
      }

      if (typeof value === "number" && Number.isFinite(value)) {
        sanitized[key] = value;
        continue;
      }

      if (typeof value === "boolean") {
        sanitized[key] = value;
      }
    }

    return Object.keys(sanitized).length > 0 ? sanitized : undefined;
  }

  function makeFingerprint(score, metadata) {
    return JSON.stringify({
      score,
      metadata: metadata ?? null,
    });
  }

  async function submitScore(payload) {
    console.info("[BubbleBashBridge] reportGameOver called", payload);

    if (!payload || typeof payload !== "object") {
      console.warn("[BubbleBashBridge] Ignoring invalid game-over payload.");
      return;
    }

    const score = Number(payload.score);

    if (!Number.isFinite(score) || score < 0) {
      console.warn("[BubbleBashBridge] Ignoring invalid score.", payload.score);
      renderStatus("Couldn't save score. You can keep playing.");
      return;
    }

    const metadata = sanitizeMetadata(payload.metadata);
    const fingerprint = makeFingerprint(score, metadata);

    if (fingerprint === lastSubmissionFingerprint) {
      console.info("[BubbleBashBridge] Duplicate game-over payload ignored.");
      return;
    }

    lastSubmissionFingerprint = fingerprint;

    const response = await fetch("/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        gameSlug: GAME_SLUG,
        score,
        metadata,
      }),
    }).catch(() => null);

    if (!response) {
      console.error("[BubbleBashBridge] Score submission failed before a response was received.");
      renderStatus("Couldn't save score. You can keep playing.");
      return;
    }

    console.info("[BubbleBashBridge] /api/scores returned status", response.status);
    const result = await response.json().catch(() => null);

    if (response.status === 401 || result?.code === "login_required") {
      console.warn("[BubbleBashBridge] Score submission requires login.");
      renderStatus("Sign in to save this score to the leaderboard.", {
        linkHref: LOGIN_URL,
        linkLabel: "Login",
      });
      return;
    }

    if (!response.ok || !result?.ok) {
      console.error("[BubbleBashBridge] Score submission failed.", result);
      renderStatus("Couldn't save score. You can keep playing.");
      return;
    }

    console.info("[BubbleBashBridge] Score submission succeeded.", result);
    renderStatus("Score saved.", {
      linkHref: LEADERBOARD_URL,
      linkLabel: "View leaderboard",
    });
  }

  window.MrDevGuyManBubbleBash = {
    reportGameOver: submitScore,
    resetPendingSubmission: function () {
      console.info("[BubbleBashBridge] Submission fingerprint reset.");
      lastSubmissionFingerprint = null;
    },
  };
}());
