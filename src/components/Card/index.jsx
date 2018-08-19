import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Card(props) {
  const { header, body, footer, utils } = props;

  const rootCss = [styles.root, utils].join(" ");

  return (
    <article className={rootCss}>
      {props.header && props.header}
      {props.body && props.body}
      {props.footer && props.footer}
    </article>
  );
}
