import * as React from "react";
import { makeStyles, tokens, Divider } from "@fluentui/react-components";
import { DividerProps } from "../interfaces/Divider";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  dividerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  customFont: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});

export const DividerSection = ({ text }: DividerProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.dividerStyle}>
        <Divider className={styles.customFont}>{text}</Divider>
      </div>
    </div>
  );
};
