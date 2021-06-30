import React, { FC } from "react";
import { Flex, Image, Text, Grid } from "theme-ui";
import ArrowIcon from "../public/arrow.svg";

interface CardPreventionProps {
  image: string;
  nameCard: string;
  description: string;
  numberDiscussions: string;
  onClick?: () => void;
  onDiscussions?: () => void;
}

const CardPrevention: FC<CardPreventionProps> = ({
  image,
  nameCard,
  description,
  numberDiscussions,
  onClick,
  onDiscussions,
}) => {
  return (
    <Grid
      columns={[2, "1fr 2fr"]}
      mx={15}
      mb={10}
      p={"7px"}
      bg="white"
      sx={{
        borderRadius: 16,
        cursor: "pointer",
        transition: "all 0.3s ease-in-out 0s",
        boxShadow: "rgb(0 0 0 / 5%) 1px 8px 8px 1px",
        ":active": {
          transform: "scale(0.95)",
        },
      }}
      onClick={onClick}
    >
      <Image src={image} variant="avatar" />

      <Flex my="7px" sx={{ flexDirection: "column" }}>
        <Text color="bigStone" mb="5px" sx={{ fontSize: 15, fontWeight: 700 }}>
          {nameCard}
        </Text>
        <Text
          color="outerSpace"
          mb={9}
          mr="5px"
          sx={{ fontSize: 0, opacity: 0.6 }}
        >
          {description}
        </Text>
        <Flex sx={{ alignItems: "center" }} onClick={onDiscussions}>
          <Text color="chelseaCucumber" mr={15} sx={{ fontSize: 14 }}>
            {numberDiscussions} Discussions
          </Text>
          <ArrowIcon />
        </Flex>
      </Flex>
    </Grid>
  );
};

export default CardPrevention;
