import React, { Fragment } from "react";
import PropTypes from "prop-types";
// cuid www.npmjs.com/package/cuid
import cuid from "cuid";
import styles from "./styles.module.scss";
import siftMemberships from "./../../../ResultsContext/lib/siftMemberships";
import { rolePriorityEnum } from "./../../../ResultsContext/enums/rolePriority";
import sortArrByFunc from "./../../../ResultsContext/lib/sortArrByFunc";
import sortNumberAsc from "./../../../ResultsContext/lib/sortNumberAsc";

export default function MembershipsList(props) {
  const { utils, data } = props;
  const person = data.personal.data.person;
  const { memberships } = person;
  const siftedMemberships = siftMemberships(
    memberships,
    "endDate",
    rolePriorityEnum
  );
  console.log("person", person);
  console.log("memberships", memberships);
  console.log("siftedMemberships", siftedMemberships);

  console.log("data", data);
  const rootCss = [styles.root, utils].join(" ");
  const sortedYears = sortArrByFunc(
    Object.keys(siftedMemberships.byYear),
    sortNumberAsc
  );

  return (
    <div className={rootCss}>
      <h1>{person.name}</h1>
      {siftedMemberships.current.length > 0 && (
        <ul>
          Current position
          {siftedMemberships.current.map(item => (
            <li key={cuid()}>{`${item.entry.role}, ${
              item.entry.organization.name
            }`}</li>
          ))}
        </ul>
      )}
      {siftedMemberships.remainder.length > 0 &&
        sortedYears.map(year => (
          <ul key={cuid()}>
            {siftedMemberships.current.length === 0 && (
              <div> Latest positions</div>
            )}
            {year}
            {siftedMemberships.byYear[year].map(item => (
              <li key={cuid()}>{`${item.entry.role}, ${
                item.entry.organization.name
              }`}</li>
            ))}
          </ul>
        ))}
    </div>
  );
}

MembershipsList.propTypes = {
  utils: PropTypes.string,
  data: PropTypes.any.isRequired
};
