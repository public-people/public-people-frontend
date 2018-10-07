import React from "react";
import Markup from "./Markup";

export default function Container(props) {
  const { phrase, getPeople, limit, offset } = props;

  return <Markup {...props} />;
}
