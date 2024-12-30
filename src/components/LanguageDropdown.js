"use client";

import React, { useContext } from "react";
import { LangContext } from "react-i18n-translation";

const LanguageDropdown = () => {
      const { lang, setLang } = useContext(LangContext);

      const handleChange = (e) => {
            setLang(e.target.value);
      };

      return (
            <select value={lang} onChange={handleChange}>
                  <option value="en">English</option>
                  <option value="ar">عربي</option>
                  <option value="de">German</option>
            </select>
      );
};

export default LanguageDropdown;
