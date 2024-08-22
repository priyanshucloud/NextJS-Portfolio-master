import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const SocialMediaData = [
  {
    icon: <AiOutlineInstagram />,
    color:
      "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FFDC80)",
    link: "https://www.instagram.com/its_13_shaan",
    'aria-label': "Visit Instagram profile of Priyanshu"
  },
  {
    icon: <BsTwitter />,
    color: "#1DA1F2",
    link: "https://twitter.com",
    'aria-label': "Visit Priyanshu's Twitter profile"
  },  
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/",
    'aria-label': "Visit Priyanshu's LinkedIn profile"
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://www.github.com/priyanshucloud",
    'aria-label': "Visit Priyanshu's Github profile"
  }
];
