import SocialLink from "./SocialLink.tsx";
import { socialData } from "../../Helper/data";

const SocialLinks = () => {
  return (
    <div className="presentation_social section4 section">
      <div className="social_ics">
        {socialData &&
          socialData.map((link, idx) => (
            <SocialLink url={link?.url} name={link.name} key={idx}>
              <link.icon />
            </SocialLink>
          ))}
      </div>
    </div>
  );
};

export default SocialLinks;
