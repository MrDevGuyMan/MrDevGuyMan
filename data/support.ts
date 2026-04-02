export type SupportMethod = {
  title: string;
  label: string;
  value: string;
  href?: string;
  note?: string;
  qrSrc?: string;
  qrAlt?: string;
};

export const supportMethods: SupportMethod[] = [
  {
    title: "Buy Me a Coffee",
    label: "Support link",
    value: "buymeacoffee.com/Your_Local_Dev",
    href: "https://buymeacoffee.com/Your_Local_Dev",
  },
  {
    title: "Bitcoin",
    label: "BTC address",
    value: "14WF7gybBoS6KnzjwsbUWxU7bTAtC62uEf",
    href: "bitcoin:14WF7gybBoS6KnzjwsbUWxU7bTAtC62uEf",
    note: "Network: Bitcoin",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=bitcoin%3A14WF7gybBoS6KnzjwsbUWxU7bTAtC62uEf",
    qrAlt: "Bitcoin wallet QR code",
  },
  {
    title: "Ethereum",
    label: "ETH address",
    value: "0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    href: "ethereum:0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    note: "Network: Ethereum",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=ethereum%3A0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    qrAlt: "Ethereum wallet QR code",
  },
  {
    title: "Tether",
    label: "USDT address",
    value: "0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    href: "https://bscscan.com/address/0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    note: "Network: BSC (BEP20)",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=0xa4c59855d0ed6d3d0295fb5535eb6243b53b46d8",
    qrAlt: "Tether wallet QR code on BSC",
  },
  {
    title: "DOGE",
    label: "DOGE address",
    value: "DQwfamjVouCPcJT3z7GRswJNLMK5ebH4jM",
    href: "dogecoin:DQwfamjVouCPcJT3z7GRswJNLMK5ebH4jM",
    note: "Network: Dogecoin",
    qrSrc:
      "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=dogecoin%3ADQwfamjVouCPcJT3z7GRswJNLMK5ebH4jM",
    qrAlt: "Dogecoin wallet QR code",
  },
];
