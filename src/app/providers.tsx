"use client";

import { IntlProvider } from "react-intl";

export function Providers({ children }: { children: React.ReactNode }) {
  return <IntlProvider locale="en">{children}</IntlProvider>;
}