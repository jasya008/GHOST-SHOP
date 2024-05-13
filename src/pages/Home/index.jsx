import React from "react";
import { First } from "../../components/sectionsHomepage/First";
import { Second } from "../../components/sectionsHomepage/Second";
import { Third } from "../../components/sectionsHomepage/Third";
import { Four } from "../../components/sectionsHomepage/Four";

export const Home = () => {
  return (
    <div>
      <First />
      <Second />
      <Four />
      <Third />
    </div>
  );
};
