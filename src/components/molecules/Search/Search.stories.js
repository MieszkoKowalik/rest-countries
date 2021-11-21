import Search from "./Search";
import React from "react";

export default {
  title: "Components/Molecules/Search",
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterCountries: () => {},
};
