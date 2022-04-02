import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import faq from "../assets/data/faq";
import "../assets/css/global.css";
import "../assets/css/faq.css";

const FaqButton = ({ activeCategory, setActiveCategory }) => {
  const updateCategory = (e) => {
    setActiveCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='faq-btn-container container-padding'>
      {faq.headers.map((q) => (
        <Button
          key={q.id}
          variant='contained'
          value={q.category}
          onClick={updateCategory}
          className={
            q.category === activeCategory ? "primary-btn" : "secondary-btn"
          }>
          {q.header}
        </Button>
      ))}
    </div>
  );
};

export default FaqButton;
