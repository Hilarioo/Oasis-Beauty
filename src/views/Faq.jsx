// ************************
//  [PAGE]  Frequently Asked Questions
//  Components: faq accordion & contact form
// ************************
import { useState, useEffect } from "react";
import faq from "../assets/data/faq";
import "../assets/css/faq.css";

import FaqButtons from "../components/faq/FaqButtons";
import ContactForm from "../components/faq/ContactForm.jsx";
import FaqAccordion from "../components/faq/FaqAccordion";

import { ReactComponent as PalmTrees } from "../assets/svg/palmtrees.svg";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(faq.headers[0].category);

  return (
    <div id='faq' className='faqContainer container-padding'>
      <div className='questions-container'>
        {/* Head */}
        <div className='contact-header'>
          <h3 className='container-padding'>FREQUENTLY ASKED QUESTIONS</h3>
        </div>
        <div className='questions-subcontainer'>
          <div className='faq-menu-section'>
            <FaqButtons
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>
          <div className='faq-section'>
            <FaqAccordion activeCategory={activeCategory} />
          </div>
        </div>
        <PalmTrees className='palmtrees-desktop' />
      </div>
      <div className='contact-section'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Faq;
