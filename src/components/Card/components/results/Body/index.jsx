import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";
import siftMemberships from "../../../../ResultsContext/lib/siftMemberships";
import sortArrByFunc from "../../../../ResultsContext/lib/sortArrByFunc";
import sortDateAsc from "../../../../ResultsContext/lib/sortDateAsc";
import { rolePriorityEnum } from "../../../../ResultsContext/enums/rolePriority";
import getHighestPriority from "../../../../ResultsContext/lib/getHighestPriority";

export default function ResultsBody(props) {
  // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { utils, item } = props;

  const siftedMemberships = siftMemberships(
    item.memberships,
    "endDate",
    rolePriorityEnum
  );

  const sortedRem = sortArrByFunc(siftedMemberships.remainder, sortDateAsc);
  const { current } = siftedMemberships;

  const highestPriorityCurrent = getHighestPriority(
    siftedMemberships.currentByPriority,
    rolePriorityEnum
  );

  const highestPriorityRemainder = getHighestPriority(
    siftedMemberships.remainderByPriority,
    rolePriorityEnum
  );

  const highestPriorityMembership =
    current.length >= 1
      ? siftedMemberships.currentByPriority[highestPriorityCurrent][0]
      : sortedRem.length >= 1
        ? sortArrByFunc(
            siftedMemberships.remainderByPriority[highestPriorityRemainder],
            sortDateAsc
          )[0]
        : undefined;

  const entry =
    highestPriorityMembership !== undefined
      ? highestPriorityMembership.entry
      : undefined;

  const display =
    entry !== undefined
      ? `${entry.role}, ${entry.organization.name}`
      : `No membership information`;

  const rootCss = [styles.root, utils].join(" ");
  return <div className={rootCss}>{display}</div>;
}

ResultsBody.propTypes = {
  utils: PropTypes.string,
  item: PropTypes.object.isRequired
};
