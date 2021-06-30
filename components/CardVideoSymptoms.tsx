import React, { FC } from "react";
import { Flex, Text, Link } from "theme-ui";

interface CardVideoSymptomsProps {
  video: string;
  name: string;
  description: string;
  link: string;
  onClick?: () => void;
}
const CardVideoSymptoms: FC<CardVideoSymptomsProps> = ({
  video,
  name,
  description,
  link,
  onClick,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      bg="white"
      mx={15}
      mb={10}
      sx={{
        height: 270,

        borderRadius: 16,
        flexDirection: "column",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
        ":active": {
          transform: "scale(0.99)",
        },
      }}
    >
      <iframe
        style={{
          borderRadius: 10,
          border: "white solid 0",
          margin: 10,
        }}
        src={video}
        height={180}
        width={310}
      />

      <Flex
        mx={15}
        onClick={onClick}
        sx={{ flexDirection: "column", cursor: "pointer" }}
      >
        <Text
          color="bigStone"
          mb="5px"
          sx={{ fontSize: 15, fontWeight: "heading" }}
        >
          {name}
        </Text>
        <Text color="outerSpace" sx={{ fontSize: 0, opacity: 0.6 }}>
          {description}
        </Text>
      </Flex>
    </Link>
  );
};

export default CardVideoSymptoms;
