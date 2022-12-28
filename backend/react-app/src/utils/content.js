import Arhar from "../assets/images/arhar.jpg"
import Bajra from "../assets/images/bajra.jpg"
import Barley from "../assets/images/barley.jpg"
import Copra from "../assets/images/copra.jpg"
import Cotton from "../assets/images/cotton.jpg"
import Gram from "../assets/images/gram.jpg"
import Groundnut from "../assets/images/groundnut.jpg"
import Jowar from "../assets/images/jowar.jpg"
import Jute from "../assets/images/jute.jpg"
import Maize from "../assets/images/maize.jpg"
import Masoor from "../assets/images/masoor.jpg"
import Moong from "../assets/images/moong.jpeg"
import Niger from "../assets/images/niger.jpg"
import Paddy from "../assets/images/paddy.jpg"
import Ragi from "../assets/images/ragi.jpg"
import Rape from "../assets/images/rape.jpg"
import Safflower from "../assets/images/safflower.jpg"
import Sesamum from "../assets/images/sesamum.jpg"
import Soyabean from "../assets/images/soyabean.jpg"
import Sugarcane from "../assets/images/sugarcane.jpg"
import Sunflower from "../assets/images/sunflower.jpg"
import Urad from "../assets/images/urad.jpg"
import Wheat from "../assets/images/wheat.jpg";

import SoilImg from "../assets/icons/soilimg.jpg";
import Diseaseimg from "../assets/icons/diseaseimg.jpg";
import Priceimg from "../assets/icons/priceimg.jpg";

import {GrLinkedin} from "react-icons/gr";
import {BsGithub} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";


const content ={
    Crops: [
        {
            name: "Arhar",
            icon: Arhar
        },
        {
            name: "Bajra",
            icon: Bajra
        },
        {
            name: "Barley",
            icon: Barley
        },
        {
            name: "Copra",
            icon: Copra
        },
        {
            name: "Cotton",
            icon: Cotton
        },
        {
            name: "Gram",
            icon: Gram
        },
        {
            name: "Groundnut",
            icon: Groundnut
        },
        {
            name: "Jowar",
            icon: Jowar
        },
        {
            name: "Jute",
            icon: Jute
        },
        {
            name: "Maize",
            icon: Maize
        },
        {
            name: "Masoor",
            icon: Masoor
        },
        {
            name: "Moong",
            icon: Moong
        },
        {
            name: "Niger",
            icon: Niger
        },
        {
            name: "Paddy",
            icon: Paddy
        },
        {
            name: "Ragi",
            icon: Ragi
        },
        {
            name: "Rape",
            icon: Rape
        },
        {
            name: "Safflower",
            icon: Safflower
        },
        {
            name: "Sesamum",
            icon: Sesamum
        },
        {
            name: "Soyabean",
            icon: Soyabean
        },
        {
            name: "Sugarcane",
            icon: Sugarcane
        },
        {
            name: "Sunflower",
            icon: Sunflower
        },
        {
            name: "Urad",
            icon: Urad
        },
        {
            name: "Wheat",
            icon: Wheat
        },        
    ],
    hero: {
        firstName: "AgroTech ",
        LastName: "Revolutionizing Farming with Artificial Intelligence",
        btnArray: ["A Programmer","AI & ML Enthusiast"],
        image: Paddy,
      },
    about:{
        content: "Myself I am Santhosh. A diligent pre-final Computer Science student at VIT Chennai with an immense passion for AI&ML and MERN. Currently I am SAMSUNG PRISM developer. A passionate programmer, highly motivated and quick learner. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detailed oriented person and I keep my goals and tasks organized."
      },
    aboutus:{
        content: "Artificial intelligence (AI) in farming can potentially revolutionize the way we grow and manage crops. AgroTech an AI Application can be used to optimize various aspects of farming, such as predicting and mitigating crop diseases, optimizing irrigation, and predicting crop prices.",
    },
    Contact: {
        title: "Contact Me",
        subtitle: "Report Inaccuracy or Discuss Projects with me",
        social_media: [
          {
            text: "santhosh.raminedi22@gmail.com",
            icon: GrMail,
            link: "mailto:santhosh.raminedi22@gmail.com",
          },
          {
            text: "santhosh.22.11",
            icon: BsInstagram,
            link: "https://www.instagram.com/santhosh.22.11/",
          },
          {
            text: "raminedisanthosh22",
            icon: GrLinkedin,
            link: "https://www.linkedin.com/in/raminedisanthosh22/"
          },
          {
            text:"Santhosh2231",
            icon: BsGithub,
            link: "https://github.com/Santhosh2231",
          },
          {
            text: "Santhosh Raminedi",
            icon: BsFacebook,
            link: "https://www.facebook.com/santhosh.raminedi",
          }
        ],
    },
    Experience: {
        title: "Goals",
        subtitle: "Our Mission",
        experience_content: [
          {
            org:"Crop Recommendation based on Soil fertility",
            logo:SoilImg, 
            link:"/soilanalysis",
            work: "Currently working on the UWB Based Static Gesture Classification"
          },
          {
    
            org:"Crop Disease Detection and fertilizer recommendation",
            logo: Diseaseimg,
            link:"/cropdisease",
            work: "I am currently part of a web developer team. I have worked on building a website for MIC club using React + tailwind css. I have designed an API's for the Notify events application"
          },
          
          {
            org:"Crop Price Prediction",
            logo: Priceimg,
           link:"/priceforecast",
            work: "I have a developed a project on Recipe Recognition using CNN. In which model takes input image of food and it recognize the food and outputs the ingredient and recipe of the food"
          },
          
        ],
      },
}

export default content;