import React from "react";
import "../../assets/css/nav.css";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const QuickLinks = () => {
  return (
    <div id='quicklinks'>
      <a href='https://www.etsy.com/listing/1022969634/rosemary-melt-balm-pre-order?ref=listings_manager_grid'>
        Products
      </a>
      <HashLink smooth to='#thevision/'>
        The Vision
      </HashLink>
      <HashLink smooth to='/faq/#contact'>
        Contact
      </HashLink>
      <HashLink smooth to='/faq/'>
        FAQ
      </HashLink>
    </div>
  );
};

export default QuickLinks;
