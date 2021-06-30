import React, { useEffect } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Poster from "../components/Poster";
import { useRouter } from "next/router";
import Boarding from "../components/Boarding";

export default {
  title: "Components",
  decorators: [withKnobs],
};

export const PosterStory = () => {
  const router = useRouter();

  return {};
};
