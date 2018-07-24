import React from "react";
import Helmet from "react-helmet";
import Header from "./../components/Header/index";
import Persons from "./../components/Persons/index";

export default function PersonsPage() {
  return (
    <div>
      <Helmet title="Person | Public People" />
      <Header />
      <div className="mt-30 mr-20 ml-20">
        <Persons />
      </div>
    </div>
  );
}
