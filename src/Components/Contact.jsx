import { AwesomeReveal } from "../Helper/helper";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div className="my_contact_section">
      <AwesomeReveal Fx={Fade} delay={200}>
        <div className="contact_me">
          CONTACT
          <div className="message">
            My inbox is always open. Looking forward to hearing from you! <br />{" "}
            <br /> Email: rodeomads@gmail.com
          </div>
        </div>
      </AwesomeReveal>
    </div>
  );
};

export default Contact;
