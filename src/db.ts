import map from "./assets/map.jpg";
import geo from "./assets/geobox.jpg";
import dash from "./assets/dashboard.jpg";
import spot from "./assets/spotify.jpg";
import trav from "./assets/Travel.jpg";
import chat from "./assets/ChatGPT.jpg";
import mern from "./assets/mern.jpg";
import expen from "./assets/tracker.jpg";
import quizr from "./assets/quizr.jpg";
import feed from "./assets/feedback.jpg";
import filegirl from "./assets/filegirl.png";
import tripai from "./assets/tripai.png";
import youbundle from "./assets/youbundle.png";
import cigartv from "./assets/cigartv.png";
import thinkblue from "./assets/thinkblue.png";
import { cardType } from "./types";

const db: cardType[] = [
  {
    title: "fileGirl",
    desc: "Built with React, Redux, Node.js, MongoDB & AWS",
    link: "https://filegirl.io",
    photo: filegirl,
  },

  {
    title: "travel ai",
    desc: "Built with React, Redux, Typescript, Node.js & deck.gl",
    link: "http://ec2-54-145-147-200.compute-1.amazonaws.com/",
    photo: tripai,
  },
  {
    title: "Geobox",
    desc: "Built with React, Mapbox & Three.js",
    link: "http://geobox-app.s3-website-us-east-1.amazonaws.com/",
    photo: geo,
  },
  {
    title: "ThinkBlue",
    desc: "Built with Next.js, Typescript, & Strapi CMS",
    link: "https://thinkbluex.com/",
    photo: thinkblue,
  },
  {
    title: "SpotifyNEXT",
    desc: "Built with Next.js & TaiwindCSS",
    link: "https://next-spotify-rust.vercel.app/",
    photo: spot,
  },
  {
    title: "WeatherMap",
    desc: "Built with Javascript",
    link: "http://weathermap-app.s3-website-us-east-1.amazonaws.com/",
    photo: map,
  },
  {
    title: "Dashboard",
    desc: "Built with React, Node.js & MongoDB",
    link: "https://merndashboard.onrender.com",
    photo: dash,
    spin: true,
  },
  {
    title: "YouBundle",
    desc: "Built with Next.js",
    link: "https://youbundle.com",
    photo: youbundle,
  },
  {
    title: "Traveler",
    desc: "Built with React, Node.js & Express",
    link: "https://traveler-kc2d.onrender.com",
    photo: trav,
    spin: true,
  },
  {
    title: "Cigar TV",
    desc: "Built with Next.js, Redux & Typescript",
    link: "https://cigartv.com/",
    photo: cigartv,
  },
  {
    title: "MernShop",
    desc: "Built with React, Node.js & MongoDB",
    link: "https://mershoptest2.onrender.com",
    photo: mern,
    spin: true,
  },
  {
    title: "ChatGPT",
    desc: "Built with React, Node.js & TailwindCSS",
    link: "https://gptchat-8amz.onrender.com",
    photo: chat,
    spin: true,
  },
  {
    title: "Expense Tracker",
    desc: "Built with React, Node.js & MongoDB",
    link: "https://expensetest3.onrender.com/",
    photo: expen,
    spin: true,
  },
  {
    title: "Quizr",
    desc: "Built with Vue.js",
    link: "https://quizr-peach.vercel.app/",
    photo: quizr,
  },
  {
    title: "FeedBack App",
    desc: "Built with React",
    link: "http://feedback-app.s3-website-us-east-1.amazonaws.com/",
    photo: feed,
  },
];

export default db;
