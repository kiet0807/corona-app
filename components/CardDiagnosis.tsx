import React, { FC } from "react";
import { Flex, Text, Image } from "theme-ui";

interface CardDiagnosisProps {
  label: string;
  content: string;
  image: string;
}

const CardDiagnosis: FC<CardDiagnosisProps> = ({ label, content, image }) => {
  return (
    <Flex
      bg="white"
      mx={15}
      mb={10}
      sx={{
        height: 300,
        width: 360,
        borderRadius: 16,
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgb(0 0 0 / 5%) 1px 10px 10px 1px",
      }}
    >
      <Image src={image} variant="diagnosis" />
      <Text
        mx={15}
        color="bigStone"
        mb="5px"
        sx={{ fontSize: 15, fontWeight: "heading" }}
      >
        {label}
      </Text>
      <Text
        mt={10}
        mx={15}
        color="outerSpace"
        sx={{ fontSize: 0, opacity: 0.6, textAlign: "center", width: 250 }}
      >
        {content}
      </Text>
    </Flex>
  );
};

export default CardDiagnosis;
