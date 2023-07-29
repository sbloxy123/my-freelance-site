import React from "react";
import { Link } from "gatsby";
import "../css/clickHere.css";

const ClickHere = ({ url, content, styleName }) => {
  return (
    <div>
      <Link to={url} className="r-link link text-underlined ">
        {content}
      </Link>
    </div>
  );
};

export default ClickHere;
