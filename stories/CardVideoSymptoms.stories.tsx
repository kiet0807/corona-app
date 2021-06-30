import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import CardVideoSymptoms from "../components/CardVideoSymptoms";
import { Box } from "theme-ui";

export default {
  title: "Card",
  decorators: [withKnobs],
};

export const WithACardVideoSymptoms = () => <Box bg={"grey"} p={20}></Box>;
