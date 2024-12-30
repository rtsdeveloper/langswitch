"use client";
import React from "react";
import useTranslation from "@/hooks/useTranslation";
import LanguageDropdown from "@/components/LanguageDropdown";
import { langFiles } from "@/translation/langFiles";

const Home = () => {
  const { t } = useTranslation(langFiles);

  return (
    <div>
      <LanguageDropdown />
      <h1>{t("welcome")}</h1>
      <p>{t("goodbye")}</p>
    </div>
  );
};

export default Home;
