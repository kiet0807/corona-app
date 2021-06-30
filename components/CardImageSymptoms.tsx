import React, { FC } from "react";
import { Flex, Text, Image } from "theme-ui";

interface CardImageSymptomsProps {
  image: string;
  name: string;
  description: string;
  onClick?: () => void;
}
const CardImageSymptoms: FC<CardImageSymptomsProps> = ({
  image,
  name,
  description,
  onClick,
}) => {
  return (
    <Flex
      onClick={onClick}
      bg="white"
      sx={{
        height: 215,
        borderRadius: 16,
        flexDirection: "column",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
        cursor: "pointer",
        ":active": {
          transform: "scale(0.95)",
        },
      }}
    >
      <Image src={image} variant="symptoms" />

      <Flex mx={15} sx={{ flexDirection: "column" }}>
        <Text
          color="bigStone"
          mb="3px"
          sx={{ fontSize: 1, fontWeight: "heading" }}
        >
          {name}
        </Text>
        <Text color="outerSpace" sx={{ fontSize: 0, opacity: 0.6 }}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CardImageSymptoms;
