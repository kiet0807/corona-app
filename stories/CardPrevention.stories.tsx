import React from "react";
import { text, withKnobs, number } from "@storybook/addon-knobs";
import CardPrevention from "../components/CardPrevention";
import { Box } from "theme-ui";

export default {
  title: "Card",
  decorators: [withKnobs],
};

export const WithACardPrevention = () => <Box bg={"grey"} p={20}></Box>;
