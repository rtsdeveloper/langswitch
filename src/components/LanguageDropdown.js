"use client";

import React, { useContext } from "react";
import { LangContext } from "@/context/LangProvider";

const LanguageDropdown = () => {
      const { lang, setLang } = useContext(LangContext);

      const handleChange = (e) => {
            setLang(e.target.value);
      };

      return (
            <select value={lang} onChange={handleChange}>
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>
                  <option value="de">German</option>
            </select>
      );
};

export default LanguageDropdown;
