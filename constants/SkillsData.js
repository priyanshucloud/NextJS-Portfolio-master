import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiJquery,
  SiMicrosoftazure,
  SiNginx,
  SiVirtualbox,
  SiFuturelearn

} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaShopify, FaJava, FaAws, FaNetworkWired, FaUbuntu, FaServer, FaWordpress} from "react-icons/fa";
import { TbBrandReactNative, TbCloudComputing } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Advance: [
      {
        name: "Azure",
        icon: <SiMicrosoftazure className="md:text-4xl text-2xl" color="#007FFF" />,
      },
      {
        name: "AWS",
        icon: <FaAws className="md:text-4xl text-2xl" color="#000000" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="md:text-4xl text-2xl" color="#000000" />,
      },
      {
        name: "Networking",
        icon: <FaNetworkWired className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "Ubuntu",
        icon: <FaUbuntu className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#000000" />
      },
      {
        name: "Server",
        icon: <FaServer className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Nginx",
        icon: <SiNginx className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Virtual Machine",
        icon: <SiVirtualbox className="md:text-4xl text-2xl" color="#039be5" />,
      },
      {
        name: "Cloud Computing",
        icon: <TbCloudComputing className="md:text-4xl text-2xsl" color="#000000" />
      },
      {
        name: "Learning",
        icon: <SiFuturelearn className="md:text-4xl text-2xsl" color="#000000" />
      },
      
    ],
    Good: [
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="md:text-4xl text-2xl" color="#555555" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "firebase",
        icon: <SiFirebase className="md:text-4xl text-2xl" color="#ffcd33" />
      },
      {
        name: "jQuery",
        icon: <SiJquery className="md:text-4xl text-2xsl" color="#106dae" />
      },
      {
        name: "netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />
      },

    ],
    Familiar: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#377cc8" />
      },
      {
        name: "Angular",
        icon: <FaAngular className="md:text-4xl text-2xl" color="#c50836" />
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative className="md:text-4xl text-2xl" color="#66dbfb" />
      },
      {
        name: "PHP",
        icon: <FaPhp className="md:text-4xl text-2xl" color="#7b7fb5" />
      },
      {
        name: "JAVA",
        icon: <FaJava className="md:text-4xl text-2xl" color="#547c99" />
      },
      {
        name: "SASS",
        icon: <DiSass className="md:text-4xl text-2xl" color="#f06292" />,
      },
      {
        name: "MySQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#08668e" />
      },
      {
        name: "Shopify",
        icon: <FaShopify className="md:text-4xl text-2xl" color="#99c14f" />
      },
      {
        name: "Wordpress",
        icon: <FaWordpress className="md:text-4xl text-2xl" color="#000000" />
      }
    ]

  }
]