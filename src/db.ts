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
import travelatio from "./assets/travelatio.png";
import { cardType } from "./types";

const db: cardType[] = [
  {
    title: "fileGirl",
    desc: "Built with React, Node.js, MongoDB & AWS",
    link: "https://filegirl.io",
    photo: filegirl,
  },
  {
    title: "travelatio",
    desc: "Built with React, Typescript, Node.js & deck.gl",
    link: "http://ec2-54-145-147-200.compute-1.amazonaws.com/",
    photo: travelatio,
  },
  {
    title: "Geobox",
    desc: "Built with React, Mapbox & Three.js",
    link: "http://geobox-app.s3-website-us-east-1.amazonaws.com/",
    photo: geo,
  },
  {
    title: "WeatherMap",
    desc: "Built with Javascript",
    link: "http://weathermap-app.s3-website-us-east-1.amazonaws.com/",
    photo: map,
  },
  {
    title: "SpotifyNEXT",
    desc: "Built with Next.js & TaiwindCSS",
    link: "https://next-spotify-rust.vercel.app/",
    photo: spot,
  },
  {
    title: "Traveler",
    desc: "Built with React, Node.js & Express",
    link: "https://traveler-kc2d.onrender.com",
    photo: trav,
    spin: true,
  },
  {
    title: "MernShop",
    desc: "Built with React, Node.js & MongoDB",
    link: "https://mershoptest2.onrender.com",
    photo: mern,
    spin: true,
  },
  {
    title: "Dashboard",
    desc: "Built with React, Node.js & MongoDB",
    link: "https://merndashboard.onrender.com",
    photo: dash,
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
