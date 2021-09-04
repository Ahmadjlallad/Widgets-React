/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
// * NOTE : useEffect Hook ==== allows function to use smeller to
// * life cycle methods
const Search = () => {
  const [term, setTerm] = useState("");
  const [wikiSearch, setWikiSearch] = useState([]);
  // const [timer, seTimer] = useState(null);
  useEffect(() => {
    /*(async () => {})();*/
    // * another way is to return a function from useEffect the return function will be called when the useEffect is ran again
    // * my way ===> console.log(timer);
    // * my way ===> if (term !== "") clearTimeout(timer);
    // * recommended from react
    // * or use iffe
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          origin: "*",
          action: "query",
          list: "search",
          srsearch: term,
          format: "json",
        },
      });
      if (term !== "") return setWikiSearch(data?.query.search);
    };
    const searchTimer = setTimeout(() => {
      search();
    }, 3000);
    // * my way ===>  seTimer(searchTimer);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [term]);
  const renderSearch = () => {
    return wikiSearch.map((result) => {
      return (
        <div className="item" key={result.pageid}>
          <div className="right floated content">
            <a
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              target="_blank"
              className="ui button"
              rel="noreferrer"
            >
              GoTo
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      );
    });
  };
  // * how to to turn "<div> </div>" dangerouslySetInnerHTML so the dangerous here
  // * is we creat a howl so they can be used to inject html like xss attack
  // * first argument is a
  // * function that runs when the the second a argument is true
  // * [] , [...array] just, or nothing at all
  // * [] = run once when the component loads or render the first time
  // * [...array] = run overtimes the array changes
  // * nothing run when component will re-render
  // * we cant mark it as async
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Search Wiki</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            type="text"
            name="search"
            placeholder="Search Wiki"
            value={term}
          />
        </div>
      </div>
      <div className="ui celled list">{renderSearch()}</div>
    </div>
  );
};
export default Search;
