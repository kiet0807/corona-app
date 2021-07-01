import React, { useEffect, FC, useState } from "react";
import { Image, Flex } from "theme-ui";
import { useRouter } from "next/router";
import Boarding from "../components/Boarding";

const Objects = [
  {
    id: 1,
    image: "/images/boarding1.PNG",
    title: "Fever",
    content:
      "He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic  medical conditions.",
  },
  {
    id: 2,
    image: "/images/boarding2.PNG",
    title: "Cough",
    content:
      "such as heart or lung disease or diabetes, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such as influenza.",
  },
  {
    id: 3,
    image: "/images/boarding3.PNG",
    title: "Breathing Difficulty",
    content:
      "Contact your doctor or clinic right away if you have COVID-19 symptoms, you've been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19",
  },
];

const index: FC = () => {
  return <Flex>ahihi</Flex>;
};

export default index;
