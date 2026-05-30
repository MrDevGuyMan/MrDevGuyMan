# Game Score Integration Checklist

Use this checklist when adding score saving and leaderboard support for a future browser game.

1. Add or confirm the game slug in the website registry.
   Update [lib/games.ts](/c:/Users/brian/Desktop/MrDevGuyMan%20WebSite/lib/games.ts) so the game is registered with the correct slug and scoring flags.

2. Create or keep a `score-bridge.js` file inside the website's public game folder.
   Example: `public/games/<game-slug>/score-bridge.js`

3. Ensure the exported `index.html` loads `score-bridge.js` before Godot startup.
   The bridge must exist before the game tries to call `window.<GameBridge>.reportGameOver(...)`.

4. In Godot, call `window.<GameBridge>.reportGameOver(...)` only on web builds.
   Pass the final score and any safe metadata only after a real game-over or run-end event.

5. Re-export the HTML5 build after the Godot changes.
   The website cannot see new bridge calls until the game is exported again.

6. Copy the export into the website without deleting the bridge file.
   When replacing exported files, keep `score-bridge.js` in place or copy it back afterward.

7. Test the browser console logs and `/api/scores` response.
   Confirm the bridge loads, `reportGameOver(...)` is called, the API returns the expected status, and the leaderboard updates.
