import React from "react";
const Link = ({ className, href, children }) => {
  return (
    <a
      className={className}
      href={href}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        //// TODO: review this
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
      }}
    >
      {children}
    </a>
  );
};
export default Link;
