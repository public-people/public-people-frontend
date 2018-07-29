import React from "react";
import PropTypes from "prop-types";
import { renderToString } from "react-dom/server";
import addPropsToChildren from "./../addPropsToChildren";

function Inner(number) {
  return React.createElement("div", null, number);
}

function Outer({ children: rawChildren, value, modify }) {
  const children = modify
    ? addPropsToChildren(rawChildren, { value })
    : rawChildren;
  return React.createElement("div", null, children);
}

Outer.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  modify: PropTypes.bool
};

Outer.defaultProps = {
  modify: false
};

const Mod = React.createElement(
  Outer,
  { value: "Hello World!", modify: true },
  Inner(1),
  Inner(2),
  Inner(3)
);

const modResult = `<div data-reactroot=""><div value="Hello World!">1</div><div value="Hello World!">2</div><div value="Hello World!">3</div></div>`;

const NoMod = React.createElement(
  Outer,
  { value: "Hello World!" },
  Inner(1),
  Inner(2),
  Inner(3)
);

const noModResult = `<div data-reactroot=""><div>1</div><div>2</div><div>3</div></div>`;

test("Modification applied", () =>
  expect(renderToString(Mod)).toEqual(modResult));
test("Modification not applied", () =>
  expect(renderToString(NoMod)).toEqual(noModResult));
