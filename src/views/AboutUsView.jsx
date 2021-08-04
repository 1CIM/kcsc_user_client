import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
//import Sections from "../modules/Sections";
import about_us_view_sections from "../data/fixtures/about_us_view_sections.json";
import { Grid } from "@material-ui/core";
import SectionSelector from "../components/Section/SectionSelector";

const AboutUsView = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchPageData = async () => {
      //let response = await Sections.read("about_us");
      //setSections(response);
      setSections(about_us_view_sections.sections);
    };
    fetchPageData();
  }, []);

  const sectionList = sections.map((section) => {
    return (
      <Grid item key={section.id}>
        <SectionSelector id={section.id} section={section} />
      </Grid>
    );
  });

  return (
    <>
      <Helmet>
        <title>About: Community Health West London</title>
      </Helmet>
      <Grid container spacing={0} direction="column" alignItems="stretch">
        {sectionList}
      </Grid>
    </>
  );
};

export default AboutUsView;
