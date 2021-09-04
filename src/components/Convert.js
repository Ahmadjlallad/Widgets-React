import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState([]);
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const doTranslation = async () => {
      try {
        const { data } = await axios.post(
          `https://translation.googleapis.com/language/translate/v2`,
          {},
          {
            params: {
              q: debouncedText,
              target: language,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );

        setTranslated(data.data.translations[0].translatedText);
      } catch (errors) {
        console.error(errors);
        setTranslated(`${errors?.message} Api is not available`);
      }
    };
    doTranslation();
  }, [language, debouncedText]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  return (
    <div>
      <h1 className="ui Header">{translated}</h1>
    </div>
  );
};
export default Convert;
