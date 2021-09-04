import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/SearchWiki";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from "./components/Header";
//   FIXME
// * NOTE:
// *  to implanted navigation in the app we would use react router but in this project we will do it from scratch
// * so that we understand the core idea of routing

// * first we have to think about route mapping

//   * ===> localhost:3000/ ===> Accordion
//   * ===> localhost:3000/list ===> Search
//   * ===> localhost:3000/dropdown ===> dropdown
//   * ===> localhost:3000/translation ===> translation

// * to do this without react router we will use the NOTE:"windows.location.pathname"
// * but this will cause a whole page reload so we will use the NOTE:"window.history.pushState"
// * we will make a new component name link and set on navigation event see
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

const options = [
  { label: "The Color Red", value: "red" },
  { label: "A Shade Of Blue", value: "Blue" },
  { label: "The Color Green", value: "Green" },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={item} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label={"select a color"}
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
