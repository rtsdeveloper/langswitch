import { cookies } from "next/headers";
import { LangWrapper } from "react-i18n-translation";

export const metadata = {
  title: "Lang Switcher",
  description: "An example app with language translation",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
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