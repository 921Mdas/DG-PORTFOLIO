import { ICON } from "./Icons";
const {
  GrLinkedinOption,
  FaGithubSquare,
  AiFillInstagram,
  AiFillFolderOpen,
  BsFillPersonFill,
  BsGearFill,
} = ICON;

export const socialData = [
  {
    url: "https://www.linkedin.com/in/deo-m-5b873253/",
    name: "Linkedin",
    icon: GrLinkedinOption,
  },
  {
    url: "https://github.com/921Mdas/",
    name: "Github",
    icon: FaGithubSquare,
  },
  {
    url: "https://www.instagram.com/",
    name: "Instagram",
    icon: AiFillInstagram,
  },
];

export const projectData = [
  {
    project_number: "01",
    project_title: "Banaleo",
    project_description: `Banaleo is a community of jazz and rumba aficionados that
                contributes musicians to our library, allowing us to compile a
                collection of African Jazz.`,
    tools: ["React", "MongoDB", "JWT", "AWS", "Canvas"],
    giturl: "https://github.com/921Mdas/Bana-Leo-BNLmusic-",
    weburl: "https://banaleo.onrender.com/",
  },
  {
    project_number: "02",
    project_title: "CleanReader",
    project_description: `A duplicate removing tool that can help clean lists, and export data in a txt format`,
    tools: ["React", "Javascript"],
    giturl: "https://github.com/921Mdas/CleanReader",
    weburl: "https://cleanreader.netlify.app/",
  },
  {
    project_number: "03",
    project_title: "PendArt",
    project_description: `Virtual market application for African Art where users can view collections, purchase and access transaction history`,
    tools: ["React Native", "MongoDB", "Express", "Redux"],
    giturl: "https://github.com/921Mdas/PENDART",
    weburl: "https://imgur.com/a/ePzRvSl",
  },
  {
    project_number: "04",
    project_title: "PendArt",
    project_description: `Virtual market application for African Art where users can view collections, purchase and access transaction history`,
    tools: ["React Native", "MongoDB", "Express", "Redux"],
    giturl: "https://github.com/921Mdas/PENDART",
    weburl: "https://imgur.com/a/ePzRvSl",
  },
];

export const NavData = [
  { title: "About Me", idx: 1, Icon: BsFillPersonFill, id: "#abtme" },
  { title: "Skills", idx: 2, Icon: BsGearFill, id: "#prject" },
  { title: "Projects", idx: 3, Icon: AiFillFolderOpen, id: "#ctcme" },
];
