import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import siftMemberships from "./../../../ResultsContext/lib/siftMemberships";
import { rolePriorityEnum } from "./../../../ResultsContext/enums/rolePriority";
import sortArrByFunc from "./../../../ResultsContext/lib/sortArrByFunc";
import sortNumberAsc from "./../../../ResultsContext/lib/sortNumberAsc";
import FadeInWrap from "../../../FadeInWrap/index";

export default function MembershipsList(props) {
  const { utils, data } = props;
  if (
    data === undefined ||
    data.personal === undefined ||
    data.personal.data === undefined ||
    data.personal.data.person === undefined
  ) {
    return <div>Loading...</div>;
  }
  const { person } = data.personal.data;
  const { memberships } = person;
  const siftedMemberships = siftMemberships(
    memberships,
    "endDate",
    rolePriorityEnum
  );
  const rootCss = [styles.root, "component-container"].join(" ");
  const component = [styles.component, "component"].join(" ");
  const sortedYears = sortArrByFunc(
    Object.keys(siftedMemberships.byYear),
    sortNumberAsc
  );

  return (
    <div className={rootCss}>
      <h1 className={component}>{person.name}</h1>
      {siftedMemberships.current.length > 0 && (
        <ul className={component}>
          Current position
          {siftedMemberships.current.map(item => (
            <li key={item.entry.id}>{`${item.entry.role}, ${
              item.entry.organization.name
            }`}</li>
          ))}
        </ul>
      )}
      {siftedMemberships.remainder.length > 0 &&
        sortedYears.map(year => (
          <ul className={component} key={year}>
            {siftedMemberships.current.length === 0 && (
              <div> Latest positions</div>
            )}
            {year}
            {siftedMemberships.byYear[year].map(item => (
              <li key={item.entry.id}>{`${item.entry.role}, ${
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
