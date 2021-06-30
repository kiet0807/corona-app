import React, { FC } from "react";
import { Button, Flex, Text, Box, Link } from "theme-ui";
import EarthIcon from "../public/earth.svg";

interface FooterProps {
  onClick?: () => void;
}
const Footer: FC<FooterProps> = ({ onClick }) => {
  return (
    <Flex
      bg="white"
      px={15}
      sx={{
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Helvetica Now Text",
      }}
    >
      <Box mr={15}>
        <EarthIcon />
      </Box>

      <Flex
        mx={10}
        sx={{
          width: 140,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Text
          color="outerSpace"
          mb="5px"
          sx={{
            fontSize: 2,
            fontWeight: "heading",
          }}
        >
          Live Map info
        </Text>
        <Text
          color="outerSpace"
          sx={{
            fontSize: 0,
            opacity: 0.6,
            lineHeight: "16px",
          }}
        >
          Watch the live update by each countries
        </Text>
      </Flex>
      <Link href="https://bando.tphcm.gov.vn/ogis" target="_blank">
        <Button onClick={onClick} variant="tertiary">
          <Text
            sx={{
              fontSize: 1,
            }}
          >
            Watch Live
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};

export default Footer;
