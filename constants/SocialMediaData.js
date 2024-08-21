import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";  // Import Twitter icon
import { FaLinkedinIn } from "react-icons/fa";

export const SocialMediaData = [
  {
    icon: <AiOutlineInstagram />,
    color:
      "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
    link: "https://www.instagram.com/its_13_shaan",
    'aria-label': "Visit Instagram"
  },
  {
    icon: <BsTwitter />,  // Correct icon for Twitter
    color: "#1DA1F2",     // Twitter's official color
    link: "https://twitter.com",
    'aria-label': "Visit Twitter"
  },  
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/",
    'aria-label': "Visit LinkedIn"
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://www.github.com/priyanshucloud",
    'aria-label': "Visit Github"
  }
];
