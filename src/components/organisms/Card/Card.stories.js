import Card from "./Card";
import React from "react";

export default {
  title: "Components/Organisms/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Skeleton = Template.bind({});
Skeleton.args = {};
export const Normal = Template.bind({});
Normal.args = {
  name: "Germany",
  region: "Europe",
  population: 83240525,
  flags: { svg: "https://flagcdn.com/de.svg" },
  capital: "Berlin",
};

export const LongName = Template.bind({});
LongName.args = {
  name: "Korea (Democratic People's Republic of)",
  region: "Asia",
  population: 25778815,
  flags: { svg: "https://flagcdn.com/kp.svg" },
  capital: "Pyongyang",
};

export const SuperLongName = Template.bind({});
SuperLongName.args = {
  name: "The United Kingdom of Great Britain and Northern Ireland",
  region: "Europe",
  population: 67215293,
  flags: { svg: "https://flagcdn.com/gb.svg" },
  capital: "London",
};
