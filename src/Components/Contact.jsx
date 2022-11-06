import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="my_contact_section">
      <Fade delay={200}>
        <div className="contact_me">
          CONTACT
          <div className="message">
            My inbox is always open. Looking forward to hearing from you! <br />{" "}
            <br /> Email: rodeomads@gmail.com
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
