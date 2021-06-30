import React, { useState } from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Boarding from "../components/Boarding";
import { Box } from "theme-ui";

const Objects = [
  {
    id: 1,
    image:
      "https://www.pikpng.com/pngl/m/66-662081_business-person-icon-png-icon-person-woman-png.png",
    title: "Fever",
    content:
      "He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic  medical conditions.",
  },
  {
    id: 2,
    image:
      "https://www.pikpng.com/pngl/m/66-662081_business-person-icon-png-icon-person-woman-png.png",
    title: "Cough",
    content:
      "such as heart or lung disease or diabetes, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such as influenza.",
  },
  {
    id: 3,
    image:
      "https://www.pikpng.com/pngl/m/66-662081_business-person-icon-png-icon-person-woman-png.png",
    title: "Breathing Difficulty",
    content:
      "Contact your doctor or clinic right away if you have COVID-19 symptoms, you've been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19",
  },
];

export default {
  title: "Boarding",
  decorators: [withKnobs],
};

export const withABoarding = () => {
  const [next, setNext] = useState(0);

  return (
    <Box bg={"grey"} p={20}>
      <Boarding object={Objects[next]} onClick={() => setNext(next + 1)} />
    </Box>
  );
};
