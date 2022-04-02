import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import QuickLinks from "../components/nav/QuickLinks";
import Languages from "../components/nav/Languages";

// Styling
import "../assets/css/footer.css";

// Logo
import { ReactComponent as Logo } from "../assets/brand/oasis-beauty.svg";
// Social(s)
import { ReactComponent as FBSocial } from "../assets/svg/fb-social.svg";
import { ReactComponent as IGSocial } from "../assets/svg/ig-social.svg";
import { ReactComponent as TKSocial } from "../assets/svg/tk-social.svg";

const Footer = () => {
  return (
    <div className='fContainer'>
      <div className='fLinks'>
        <Accordion disableGutters={true} square={true} className='fAccordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography className='fAccordionHeader'>Quick Links</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <QuickLinks />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disableGutters={true} square={true} className='fAccordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography className='fAccordionHeader'>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Languages />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          defaultExpanded={true}
          disableGutters={true}
          square={true}
          className='fAccordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography className='fAccordionHeader'>Newsletter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className='subscribeContainer'>
                <p>
                  Be the first to know! Also,{" "}
                  <strong>10% OFF your first order.</strong> 🤑
                </p>
                <Box
                  component='form'
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete='off'
                  className='container-padding'>
                  <div>
                    <TextField
                      id='outlined-required'
                      label='Email'
                      name='email'
                      className='v-full'
                    />
                  </div>
                  {/* Button [SEND] */}
                  <Button
                    variant='contained'
                    className='newsletter-btn v-full contact-send-btn'>
                    Subscribe
                  </Button>
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='fBttm'>
        {/* logo */}
        <Logo id='fLogo' />

        {/* socials */}
        <div id='fSocials'>
          <a href='https://www.facebook.com/'>
            <FBSocial id='fb' />
          </a>
          <a href='https:/www.instagram.com/'>
            <IGSocial id='ig' />
          </a>
          <a href='https:/www.tiktok.com/'>
            <TKSocial id='tk' />
          </a>
        </div>

        {/* copyright */}
        <p>© 2022 Oasis Beauty | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
