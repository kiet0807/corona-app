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
  const router = useRouter();
  const [next, setNext] = useState(0);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChange(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (next === 2) {
      router.push("/dashboard");
    } else {
      setNext(next + 1);
    }
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex
        sx={{
          width: 360,
          height: 680,
        }}
      >
        <Flex
          sx={{
            position: "absolute",
            width: 360,
            height: 680,
            opacity: change ? 0 : 1,
            transition: "all 1.5s ease-in-out 0s",
            zIndex: change ? -1 : 1,
          }}
        >
          <Image src="/images/covid.png" alt="image" />
        </Flex>

        {change && (
          <Boarding
            object={Objects[next]}
            onClick={handleClick}
            onSkip={handleSkip}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default index;
