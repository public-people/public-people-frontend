import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { store } from "./configureStore";

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider {...{ store }}>{bodyComponent}</Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
