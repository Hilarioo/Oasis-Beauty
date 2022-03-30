// ************************
//  [COMPONENT] Contact Form
//  Details:    n/a
// ************************
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ReactComponent as PalmTrees } from "../assets/svg/palmtrees.svg";

const ContactForm = () => {
  return (
    <div className='contact-container'>
      <PalmTrees className='palmtrees-mobile' />
      {/* Head */}
      <div className='contact-header'>
        <h3 className='container-padding'>NEED MORE HELP?</h3>
      </div>
      <div className='contact-body'>
        <h1 className='container-padding'>CONTACT US</h1>
        <p className='container-padding'>
          Please fill out the following form and we will get back to you within
          48 hours. If the question is in regards to an order, please provide
          the order number.
        </p>
        {/* Form */}
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
              label='Name'
              name='fname'
              className='v-full'
            />
            <TextField
              id='outlined-required'
              label='Email'
              name='email'
              className='v-full'
            />
            <TextField
              id='outlined-required'
              label='Subject'
              name='subject'
              className='v-full'
            />
            <TextField
              id='outlined-multiline-static'
              label='Description'
              name='description'
              multiline
              rows={4}
              className='v-full'
            />
          </div>
          {/* Button [SEND] */}
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            className='submit-btn v-full contact-send-btn'>
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default ContactForm;
