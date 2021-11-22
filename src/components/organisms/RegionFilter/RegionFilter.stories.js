import RegionFilter from "./RegionFilter";
import React from "react";

export default {
  title: "Components/organisms/RegionFilter",
  component: RegionFilter,

  args: {
    filterCountriesbyRegion: () => {},
  },
};

const Template = (args) => <RegionFilter {...args} />;

export const Default = Template.bind({});
Default.args = {};
