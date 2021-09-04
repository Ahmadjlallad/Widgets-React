import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (dropdownRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    // * get call first then react event get called
    document.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);

  const renderOptions = () => {
    return options.map((option) => {
      if (selected === option) return null;
      return (
        <div
          onClick={() => {
            onSelectedChange(option);
          }}
          key={option.value}
          value={option.value}
          className="item"
        >
          {option.label}
        </div>
      );
    });
  };

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          ref={dropdownRef}
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui dropdown selection ${
            open === true ? "active visible" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open === true ? "visible transition" : ""}`}>
            {renderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
