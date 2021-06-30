import React, { FC } from "react";
import { Flex, Text, Image, Button, Box } from "theme-ui";

export interface ObjectProps {
  id: number;
  image: string;
  title: string;
  content: string;
}

export interface BoardingProps {
  object: ObjectProps;
  onClick?: () => void;
  onSkip?: () => void;
}

const Boarding: FC<BoardingProps> = ({ object, onClick, onSkip }) => {
  return (
    <Flex
      bg="#ED3D3D"
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Flex
        mt={50}
        sx={{
          height: "40%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={object.image} variant="boarding" />
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Text
          color="white"
          mx={26}
          mb={10}
          sx={{
            fontSize: 22,
            fontWeight: "heading",
          }}
        >
          {object.title}
        </Text>
        <Text
          color="white"
          mx={26}
          sx={{
            fontSize: 1,
            fontWeight: "body",
            lineHeight: "24px",
          }}
        >
          {object.content}
        </Text>
      </Flex>
      <Flex
        mx={20}
        mb={30}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          color="white"
          onClick={onSkip}
          sx={{
            fontSize: 15,
            fontWeight: "heading",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out 0s",
            opacity: 0.8,
            ":hover": {
              opacity: 1,
            },
            ":active": {
              transform: "scale(0.95)",
            },
          }}
        >
          Skip
        </Text>
        <Flex ml={35}>
          <Box
            bg={object.id === 1 ? "white" : "#870000"}
            m="2px"
            sx={{
              borderRadius: 999,
              width: 7,
              height: 7,
            }}
          ></Box>
          <Box
            bg={object.id === 2 ? "white" : "#870000"}
            m="2px"
            sx={{
              borderRadius: 999,
              width: 7,
              height: 7,
            }}
          ></Box>
          <Box
            m="2px"
            bg={object.id === 3 ? "white" : "#870000"}
            sx={{
              borderRadius: 999,
              width: 7,
              height: 7,
            }}
          ></Box>
        </Flex>
        <Button onClick={onClick} variant="primary">
          <Text
            color="chelseaCucumber"
            sx={{
              fontWeight: "heading",
              fontSize: 15,
            }}
          >
            Next
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Boarding;
