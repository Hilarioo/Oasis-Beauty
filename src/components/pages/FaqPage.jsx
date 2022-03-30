// ************************
//  [PAGE]  Frequently Asked Questions
//  Components: faq accordion & contact form
// ************************
import { useState, useEffect } from "react";
import faq from "../../assets/data/faq";
import "../../assets/css/global.css";
import "../../assets/css/faq.css";

import FaqButtons from "../FaqButtons";
import ContactForm from "../ContactForm.jsx";
import FaqAccordion from "../FaqAccordion";
import Footer from "../Footer";

import { ReactComponent as PalmTrees } from "../../assets/svg/palmtrees.svg";

const FaqPage = () => {
  const [activeCategory, setActiveCategory] = useState(faq.headers[0].category);

  return (
    <div className='container'>
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

      <Footer />
    </div>
  );
};

export default FaqPage;
