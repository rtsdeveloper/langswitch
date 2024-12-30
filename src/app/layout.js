import LangWrapper from "@/wrapper/LangWrapper";
import { cookies } from "next/headers";

export const metadata = {
  title: "Lang Switcher",
  description: "An example app with language translation",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const initialLang = cookieStore.get("lang")?.value || "en";
  const dir = initialLang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={initialLang} dir={dir}>
      <body>
        <LangWrapper initialLang={initialLang}>{children}</LangWrapper>
      </body>
    </html>
  );
}