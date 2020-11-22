import { useState, useEffect } from "react";
export let navList = [
  { id: "1", title: "Home" },
  { id: "2", title: "About Us" },
  { id: "3", title: "Services" },
  { id: "4", title: "Pricing" },
  { id: "5", title: "Careers" },
];

export const Partners = [
  { id: "1", imageurl: require("../assets/images/apple.PNG").default },
  { id: "2", imageurl: require("../assets/images/airbnb.png").default },
  { id: "3", imageurl: require("../assets/images/google.PNG").default },
  { id: "4", imageurl: require("../assets/images/nvidia.PNG").default },
  { id: "5", imageurl: require("../assets/images/tesla.PNG").default },
  { id: "6", imageurl: require("../assets/images/samsung.PNG").default },
  { id: "7", imageurl: require("../assets/images/facebook.PNG").default },
  { id: "8", imageurl: require("../assets/images/microsoft.PNG").default },
];

export const People = [
  {
    id: "1",
    imageurl: require("../assets/people/darlene-chabrat.jpg").default,
    title: "Frank Latrnam",
    description: "CEO",
  },
  {
    id: "1",
    imageurl: require("../assets/people/david-campion.jpg").default,
    title: "David Campion",
    description: "UI/UX Designer",
  },
  {
    id: "1",
    imageurl: require("../assets/people/gaetan-houssin.jpg").default,
    title: "Gaeton Houssin",
    description: "Full Stack Developer",
  },
  {
    id: "1",
    imageurl: require("../assets/people/jerome-boudot.jpg").default,
    title: "Jerome Boudot",
    description: "Marketing",
  },
  {
    id: "1",
    imageurl: require("../assets/people/jerome-mahuet.jpg").default,
    title: "Jerome mahuet",
    description: "Customer Support",
  },
  {
    id: "1",
    imageurl: require("../assets/people/manuela-faveri.jpg").default,
    title: "Manuela Faveri",
    description: "Data Analyst",
  },
  {
    id: "1",
    imageurl: require("../assets/people/nicolas-lebarreau.jpg").default,
    title: "Nicolas Lebarreau",
    description: "Data Scientist",
  },
];

export const componentCheckSize = () => {
  let isMobile = false;
  if (window.outerWidth < 768) {
    isMobile = true;
  }
  return isMobile;
};

// export const componentReSize=()=>{
//     const [isMobile,setisMobile]=useState(false);
//     useEffect(()=>{
//         let checkSize=false;
//         if(!checkSize){
//             updateDimensions();
//             checkSize=true;
//         }
//         window.addEventListener("resize",updateDimensions);
//         return()=>window.removeEventListener("resize",updateDimensions)

//     },[]);
//     const updateDimensions=()=>{
//         if(window.outerWidth<768){
//             setisMobile(true);
//         }
//         else{
//             setisMobile(false)
//         }
//         return isMobile
//     }
// }
