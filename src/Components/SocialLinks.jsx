import SocialLink from "./SocialLink";
import { socialData } from "../Helper/data";
import { Slide } from "react-awesome-reveal";

const SocialLinks = () => {
  return (
    <Slide direction="up" delay={1}>
      <div className="presentation_social section4 section">
        <div className="presentation_social_icon">
          {socialData &&
            socialData.map((link, idx) => (
              <SocialLink url={link?.url} name={link.name} key={idx}>
                <link.icon />
              </SocialLink>
            ))}
        </div>
      </div>
    </Slide>
  );
};

export default SocialLinks;
