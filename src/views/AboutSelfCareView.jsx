import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Sections from "../modules/Sections";
import { Grid, makeStyles } from "@material-ui/core";
import SectionSelector from "../components/Section/SectionSelector";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      marginTop: "120px"
    },
  },
}));

const AboutSelfCareView = () => {
  const [sections, setSections] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchPageData = async () => {
      let response = await Sections.index("about_self_care");
      setSections(response);
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
        <title>About: Self Care</title>
      </Helmet>
      <Grid container spacing={0} className={classes.grid}>
        {sectionList}
      </Grid>
    </>
  );
};

export default AboutSelfCareView;
