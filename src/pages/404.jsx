import React from "react";
import Main from "../components/Main/index";

export default function NotFoundPage() {
  /* eslint-disable react/jsx-filename-extension */
  /* GatsbyJS requires 404 to be .js file */
  return (
    <Main>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Main>
  );
  /* eslint-enable */
}
