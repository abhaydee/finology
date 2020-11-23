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
    id: "2",
    imageurl: require("../assets/people/david-campion.jpg").default,
    title: "David Campion",
    description: "UI/UX Designer",
  },
  {
    id: "3",
    imageurl: require("../assets/people/gaetan-houssin.jpg").default,
    title: "Gaeton Houssin",
    description: "Full Stack Developer",
  },
  {
    id: "4",
    imageurl: require("../assets/people/jerome-boudot.jpg").default,
    title: "Jerome Boudot",
    description: "Marketing",
  },
  {
    id: "5",
    imageurl: require("../assets/people/jerome-mahuet.jpg").default,
    title: "Jerome mahuet",
    description: "Customer Support",
  },
  {
    id: "6",
    imageurl: require("../assets/people/manuela-faveri.jpg").default,
    title: "Manuela Faveri",
    description: "Data Analyst",
  },
  {
    id: "7",
    imageurl: require("../assets/people/nicolas-lebarreau.jpg").default,
    title: "Nicolas Lebarreau",
    description: "Data Scientist",
  },
];

export const service = [
    {
      id: "1",
      imageurl: require("../assets/people/darlene-chabrat.jpg").default,
      title: "Frank Latrnam",
      profession: "CEO",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "2",
      imageurl: require("../assets/people/david-campion.jpg").default,
      title: "David Campion",
      profession: "UI/UX Designer",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "3",
      imageurl: require("../assets/people/gaetan-houssin.jpg").default,
      title: "Gaeton Houssin",
      profession: "Full Stack Developer",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "4",
      imageurl: require("../assets/people/jerome-boudot.jpg").default,
      title: "Jerome Boudot",
      profession: "Marketing",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "5",
      imageurl: require("../assets/people/jerome-mahuet.jpg").default,
      title: "Jerome mahuet",
      profession: "Customer Support",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "6",
      imageurl: require("../assets/people/manuela-faveri.jpg").default,
      title: "Manuela Faveri",
      profession: "Data Analyst",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
    {
      id: "7",
      imageurl: require("../assets/people/nicolas-lebarreau.jpg").default,
      title: "Nicolas Lebarreau",
      profession: "Data Scientist",
      description:"\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quo.\""
    },
  ];
  
export const ComponentReSize=()=>{
    const [isMobile,setisMobile]=useState(false);
    useEffect(()=>{
        let checkSize=false;
        if(!checkSize){
            updateDimensions();
            checkSize=true;
        }
        window.addEventListener("resize",updateDimensions);
        return()=>window.removeEventListener("resize",updateDimensions)

    },[]);
    const updateDimensions=()=>{  
        if(window.outerWidth<=576){
            setisMobile(true);
        }
        else{
            setisMobile(false)
        }
      }
        return isMobile
}
