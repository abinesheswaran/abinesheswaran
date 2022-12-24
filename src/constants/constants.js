import bravoImage from "../images/bravo.jpg";
import teamAwardImage from "../images/teamaward.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Menu_Items = [
  { menuName: "Home", pageId: "home" },
  { menuName: "About", pageId: "about" },
  { menuName: "Project", pageId: "projects" },
  { menuName: "Skills", pageId: "skills" },
  { menuName: "Awards", pageId: "awards" },
  { menuName: "Experience", pageId: "experience" },
  { menuName: "Contact", pageId: "contact" },
];

export const SKILL_LIST = [
  { title: "React JS", rating: 90 },
  { title: "JavaScript", rating: 90 },
  { title: "TypeScript", rating: 75 },
  { title: "HTML & CSS", rating: 80 },
  { title: "Redux", rating: 85 },
  { title: "Material UI", rating: 80 },
  { title: "React Native", rating: 30 },
  { title: "Node JS", rating: 65 },
];

export const EXPERIENCE_LIST = [
  {
    companyName: "Kudelski Security",
    role: "Associate Engineer",
    startDate: "Oct 2022",
    endDate: "Present",
    logo: "https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/services/professional-services/guardian-partners/Logo-Kudelski-Security.png",
    location: "Bengaluru, Karnataka, India",
  },
  {
    companyName: "Kudelski Security",
    role: "Trainee Engineer",
    startDate: "Dec 2021",
    endDate: "Sep 2022",
    logo: "https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/services/professional-services/guardian-partners/Logo-Kudelski-Security.png",
    location: "Bengaluru, Karnataka, India",
  },
];

export const PROJECTS_LIST = [
  {
    projectName: "UCM (Use Case Manager)",
    startDate: "Nov 2022",
    endDate: "Present",
    company: "Kudelski Security",
    logo: "https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/services/professional-services/guardian-partners/Logo-Kudelski-Security.png",
    describtion:
      "UCM is an application used by the Kudelski’s sales team and the detection engineers to view the attack coverage information against the standard MITRE ATT&CK Framework. It provides theoretical and practical coverage that helps the sales team show our detection solutions’ efficiency to potential customers.",
    techStack:
      "React JS (v17), TypeScript (v4), Bootstrap (v4), Node JS, Elasticsearch, HTML5, CSS3, Java 11, PostgreSQL, Docker, etc.",
  },
  {
    projectName: "CFC-UCM (Cyber-Fusion-Center - Use Case Manager)",
    startDate: "Aug 2021",
    endDate: "Present",
    company: "Kudelski Security",
    logo: "https://www.f5.com/content/dam/f5-com/page-assets-en/home-en/services/professional-services/guardian-partners/Logo-Kudelski-Security.png",
    describtion:
      "CFC offers Managed Detection and Response services to organizations to address modern cyber threats. The UCM is a part of this service which provides the attack coverage information to the organization and allows them to focus on their security gaps.",
    techStack:
      "React JS (v17), TypeScript (v4), Material-UI (v5), Node JS, HTML5, CSS3, Azure, Kotlin, Docker, etc.",
  },
];

export const AWARD_IMAGES = [bravoImage, teamAwardImage];

export const CONTACT_DETAILS = [
  {
    title: "Bangalore, India",
    subTitle: "Brookfield",
    icon: <LocationOnIcon sx={{ fontSize: "32px" }} />,
  },
  {
    title: "(+91) 7010060374",
    subTitle: "Mon to Fri 9am to 6 pm",
    icon: <CallIcon sx={{ fontSize: "32px" }} />,
  },
  {
    title: "abinesheswaranone@gmail.com",
    subTitle: "Send us your query anytime!",
    icon: <MailOutlineIcon sx={{ fontSize: "32px" }} />,
  },
  {
    title: "linkedin.com/in/abinesh-eswaran",
    subTitle: "LinkedIn",
    icon: <LinkedInIcon sx={{ fontSize: "32px" }} />,
  },
];
