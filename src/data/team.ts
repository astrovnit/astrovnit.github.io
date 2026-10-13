import anushkaPhoto from "@/assets/team/anushka.jpeg";
import arnavPhoto from "@/assets/team/arnav.png";
import dishaPhoto from "@/assets/team/disha.jpeg";
import ganeshPhoto from "@/assets/team/ganesh.jpeg";
import moulikPhoto from "@/assets/team/moulik.jpeg";
import mrunalPhoto from "@/assets/team/mrunal.jpeg";
import ramakarthikPhoto from "@/assets/team/ramakarthik.jpeg";
import rishitPhoto from "@/assets/team/rishit.jpeg";
import shravanPhoto from "@/assets/team/shravan.jpeg";
import vpsinghPhoto from "@/assets/team/vpsingh.jpeg";
import yasholaxmiPhoto from "@/assets/team/yasholaxmi.jpeg";

export type CoreMember = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  photo: string;
  objectPosition?: string;
};

export const facultyIncharges: CoreMember[] = [
  {
    id: "fac-1",
    name: "Dr. M. S. Ramkarthik",
    role: "Faculty Incharge",
    tagline:
      "With expertise in Quantum Theory, Quantum Computing, Mathematical Physics, and Many-Body Physics, he brings a deep theoretical perspective to our exploration of the universe. His research reflects the fascinating intersection of mathematics, computation, and the fundamental laws of nature.",
    photo: ramakarthikPhoto,
    objectPosition: "center",
  },
  {
    id: "fac-2",
    name: "Dr. Vishnu Pratap Singh",
    role: "Faculty Incharge",
    tagline:
      "His research focuses on Optimization under Uncertainty and Operations Research, exploring mathematical methods for solving complex problems under real-world constraints. He brings a rigorous analytical perspective to our club's scientific endeavors.",
    photo: vpsinghPhoto,
    objectPosition: "center",
  },
];

export const executiveLeadership: CoreMember[] = [
  {
    id: "pres",
    name: "Arnav Meshram",
    role: "President",
    tagline: "Metallurgy Engineering major by day, sleep-deprived stargazer by night.",
    photo: arnavPhoto,
    objectPosition: "center",
  },
  {
    id: "vp",
    name: "Moulik Parekh",
    role: "Vice-President",
    tagline: "Certified mechanic and uncertified astro nerd.",
    photo: moulikPhoto,
    objectPosition: "center",
  },
];

export const researchLeadership: CoreMember[] = [
  {
    id: "res-1",
    name: "Rishit Kulkarni",
    role: "Head of Research",
    tagline: "Mechanical engineering student interested in aeronautics and aerospace tech.",
    photo: rishitPhoto,
    objectPosition: "center",
  },
  {
    id: "res-2",
    name: "Shravan Zoad",
    role: "Head of Research",
    tagline: "Stargazing is my coping mechanism.",
    photo: shravanPhoto,
    objectPosition: "center",
  },
];

export const committeeHeads: CoreMember[] = [
  {
    id: "tech",
    name: "Disha Garpal",
    role: "Technical Head",
    tagline: "Debugging the universe.",
    photo: dishaPhoto,
    objectPosition: "center",
  },
  {
    id: "content",
    name: "Mrunal Jadhav",
    role: "Head of Content Creation",
    tagline:
      "Sometimes, I just look up and remember that there's a whole universe beyond what's bothering me.",
    photo: mrunalPhoto,
    objectPosition: "center",
  },
  {
    id: "design",
    name: "Anushka Bansod",
    role: "Head of Design",
    tagline: "I am utterly spellbound by the neon glow of nebulae in deep space.",
    photo: anushkaPhoto,
    objectPosition: "center",
  },
  {
    id: "media",
    name: "Ganesh Kumar Balivada",
    role: "Head of Multimedia",
    tagline: "Chasing peaceful places on Earth and impossible distances in the sky.",
    photo: ganeshPhoto,
    objectPosition: "center",
  },
  {
    id: "pr",
    name: "Yasholaxmi Nichante",
    role: "Head of Public Relations",
    tagline: "Curious about what things are made of — from grain structures to galaxies.",
    photo: yasholaxmiPhoto,
    objectPosition: "center",
  },
];
