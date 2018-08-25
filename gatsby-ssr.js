import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import configureStore from "./src/redux/store";
const store = configureStore();
console.log("store in ssr", store);

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const ConnectedBody = () => (
    <Provider {...{ store }}>{bodyComponent}</Provider>
  );

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};
