import React, { useState } from "react";

// * NOTE to user state in faction
// * defined hepper functions
// * to organize the code
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // * NOTE to user state is permitee when we
  // * call useState() we reserve an array with two values
  // * first value is the state and
  // * the second value is a function to update the state
  // * null are initial state value
  // * NOTE ot use multiple state we can use useState()
  // * multiple times
  // * NOTE const [counter, setCounter] = useState(0);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const readerItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={i}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(i);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{readerItems}</div>;
};
export default Accordion;
