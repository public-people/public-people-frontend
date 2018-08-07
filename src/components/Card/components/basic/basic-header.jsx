import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function BasicHeader(props) {
  const Heading = `h${props.headerLevel}`;
  return (
    <Fragment>
      <a className="skiplink" href={"#" + props.title}>
        {props.title}
      </a>
      <Heading>Hello!</Heading>
    </Fragment>
  );
}

BasicHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headerLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};
