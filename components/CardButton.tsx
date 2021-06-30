import React, { FC } from "react";
import { Button, Flex, Text, Image, Link } from "theme-ui";
import WhiteArrowIcon from "../public/whiteArrow.svg";

interface CardButtonProps {
  title: string;
  content: string;
  onClick?: () => void;
}

const CardButton: FC<CardButtonProps> = ({ title, content, onClick }) => {
  return (
    <Flex
      bg="white"
      mx={15}
      sx={{
        position: "relative",
        borderRadius: 16,
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "rgb(0 0 0 / 5%) 1px 8px 8px 1px",
      }}
    >
      <Text
        my={18}
        ml={20}
        mr={80}
        color="#4F4F7D"
        sx={{
          fontSize: 20,
          lineHeight: "30px",
          fontWeight: "heading",
        }}
      >
        {title}
      </Text>
      <Text
        color="#4F4F7D"
        mx={20}
        sx={{
          fontSize: 1,

          fontWeight: "600",
          opacity: 0.6,
        }}
      >
        {content}
      </Text>

      <Flex
        mx={20}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="https://tuoitre.vn/tim-kiem.htm?keywords=covid"
          target="_blank"
        >
          <Button onClick={onClick} variant="secondary">
            <Text
              mr={20}
              sx={{
                fontSize: 14,
                color: "white",
                fontWeight: "600",
              }}
            >
              See More
            </Text>
            <WhiteArrowIcon />
          </Button>
        </Link>
        <Image src="/images/person.PNG" variant="person" />
      </Flex>
    </Flex>
  );
};

export default CardButton;
