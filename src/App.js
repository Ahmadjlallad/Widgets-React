/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/SearchWiki";
const item = [
  {
    title: `What is react?`,
    content: `React is a front end javascript framework`,
  },

  {
    title: `What use React?`,
    content: `React is a favorite JS library among engineers`,
  },

  {
    title: `How do you use React?`,
    content: `You use React by creating components?`,
  },
];
export default () => {
  return (
    <div>
      {/* <Accordion items={item} /> */}
      <Search />
    </div>
  );
};
