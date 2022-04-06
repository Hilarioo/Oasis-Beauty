// ************************
//  [COMPONENT] Frequently Asked Questions
//  Details:    accordion bootstrap
// ************************
import faq from "../../assets/data/faq";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqAccordion = ({ activeCategory }) => {
  return (
    <div className='container-padding'>
      <h3>
        {faq.headers.find((q) => q.category === activeCategory).header +
          " QUESTIONS:" || "Questions:"}
      </h3>

      {faq[activeCategory].map((q) => (
        <Accordion key={q.id} defaultExpanded={q.id === 0 ? true : false}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'>
            <Typography>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FaqAccordion;
