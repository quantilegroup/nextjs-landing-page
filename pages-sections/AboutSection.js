import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { title } from "assets/jss/nextjs-material-kit.js";
import { grayColor, section } from "assets/jss/nextjs-material-kit.js";

const aboutStyle = {
  section,
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "2rem",
    minHeight: "2em",
    textDecoration: "none",
  },
  description: {
    color: grayColor,
  },
};

const useStyles = makeStyles(aboutStyle);

export default function ServicesSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={10} xl={10}>
          <h3 className={classes.title}>Our Beliefs</h3>
          <h3 className={classes.title}>Our Principles</h3>- Enterprise
          technology hasn't capitalzed on massive advancements in consumer
          technology over the past few years. - False belief that older
          technology == safer technology
          <h3 className={classes.title}>Being data-driven isn't enough</h3>
          <p className={classes.description}>
            Yes, we should try to inform decisions with data as quickly as
            possible, but the way those insights are designed, automated, and
            delivered marks the difference between adoption and abandonment.
            Your executive leadership team isn't as excited about the science as
            we are; they need to trust your process and intuit your results
            before they'll feel comfortable running a hypothesis-driven
            business.
            <br />
            <br />
            Data science is more than just pretty visuals. You know it, we know
            it, and together we're going to prove it.
          </p>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
