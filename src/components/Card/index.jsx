import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Card(props) {
  const {
    header,
    body,
    footer,
    // title,
    // children,
    // level,
    // highlighted,
    // link,
    // height,
    utils
  } = props;

  // const Header1 = props.header;
  // console.log("header", header);
  // console.log("header1", Header1);

  const rootCss = [styles.root, utils].join(" ");

  return (
    <article className={rootCss}>
      {props.header ? props.header : null}
      {props.body ? props.body : null}
      {props.footer ? props.footer : null}
    </article>
  );
}
