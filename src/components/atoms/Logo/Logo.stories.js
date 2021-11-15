import Logo from "./Logo";
import React from "react";

export default {
  title: "Components/Atoms/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
