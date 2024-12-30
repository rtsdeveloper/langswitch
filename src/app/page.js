"use client";
import React from "react";
import LanguageDropdown from "@/components/LanguageDropdown";
import { langFiles } from "@/translation/langFiles";
import { useTranslation } from "react-i18n-translation";

const Home = () => {
  const { t } = useTranslation(langFiles);

  return (
    <>
      <LanguageDropdown />
      <h1>{t("welcome")}</h1>
      <p>{t("goodbye")}</p>
    </>
  );
};

export default Home;
