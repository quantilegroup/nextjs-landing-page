import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NumberArea from "components/InfoArea/NumberArea.js";

import { title, section } from "assets/jss/nextjs-material-kit.js";

const techStyle = {
  backgroundSection: {
    padding: "1.8em 0 1.8em 0",
    textAlign: "center",
    alignItems: "center",
    /* background by SVGBackgrounds.com */
    backgroundImage: "url('/images/patterns/Pattern-Randomized_small.svg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  description: {
    color: "#999",
  },
  title : {
    ...title,
    fontSize: "1.5em",
    fontWeight: "300",
    color: "#000",
    margin: "1.3rem 0 1.8rem",
  },
  section,
};

const useStyles = makeStyles(techStyle);

export default function ServicesSection() {
  const classes = useStyles();
  return (
    <div className={classes.backgroundSection}>
      <h2 className={classes.title}> Value we've delivered to F100 Retail & CPG Companies</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="3-6%"
            description="improvement in operating profit through pricing and promotion optimizations"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="23%+"
            description="increase in out-of-sample forecasting error compared to preexisting solutions"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <NumberArea
            title="50M"
            description="Unique store/SKU/Week combinations processed every 15 minutes"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
