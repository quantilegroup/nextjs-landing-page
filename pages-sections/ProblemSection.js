import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { grayColor } from "assets/jss/nextjs-material-kit.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {
  title,
  section,
  ThinGrayLine,
} from "assets/jss/nextjs-material-kit.js";

const problemStyle = {
  section,
  title,
  description: {
    color: grayColor,
  },
  emphasizedText : {
    margin: "3em 0 0"
  }
};

const useStyles = makeStyles(problemStyle);

export default function ProblemSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={10} xl={10}>
          <h2 className={classes.title}>
            Conventional analytics won't give you a competitive edge
          </h2>
          <p className={classes.description}>
            Deciphering and acting upon customer insights is critical to success in the omnichannel age, but pie charts
            and histograms won't compel your organization to take action. Your executives aren't as excited about the science
            as we are; they want trustworthy, forward-looking tools to guide them in a language they can relate to.{" "}
          </p>
          <p className={classes.emphasizedText}>
            Data science is more than just pretty visuals. You know it, we know
            it, and together we're going to prove it.
          </p>
          <br />
        </GridItem>
      </GridContainer>
      <ThinGrayLine />
    </div>
  );
}
