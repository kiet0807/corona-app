import React from "react";
import { text, withKnobs, number } from "@storybook/addon-knobs";
import CardButton from "../components/CardButton";
import { Box } from "theme-ui";

export default {
  title: "Card",
  decorators: [withKnobs],
};

export const WithACardButton = () => (
  <Box bg={"grey"} p={20}>
    <CardButton
      title="Coronavirus disease (COVID-19) advice for the public"
      content="Stay aware of the latest information on the COVID-19 outbreak"
    />
  </Box>
);
