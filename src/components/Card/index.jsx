import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Card(props) {
  const {
    header,
    body,
    footer,
    // title,
    // children,
    // level,
    // highlighted,
    // link,
    // height,
    utils
  } = props;

  // const Header1 = props.header;
  // console.log("header", header);
  // console.log("header1", Header1);

  const rootCss = [styles.root, utils].join(" ");

  return (
    <article className={rootCss}>
      {props.header ? props.header : null}
      {props.body ? props.body : null}
      {props.footer ? props.footer : null}
    </article>
  );

  //   return (
  //     <ConditionalTag
  //       className={rootCss}
  //       style={{ height }}
  //       href={typeof link === "string" ? link : null}
  //     >
  //       <div className={innerCss}>
  //         {title ? (
  //           <HeadingLevel className={titleCss}>{title}</HeadingLevel>
  //         ) : null}
  //         <div className={styles.content}>{children}</div>
  //         <Header title={"foo"} headerLevel={1} />
  //       </div>
  //       {footer ? <div className={styles.footer}>{footer}</div> : null}
  //     </ConditionalTag>
  //   );
}

// Card.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
//   highlighted: PropTypes.bool,
//   link: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   height: PropTypes.number,
//   utils: PropTypes.string
// };

// Card.defaultProps = {
//   title: null,
//   level: 6,
//   highlighted: false,
//   link: false,
//   footer: false,
//   height: null,
//   utils: null
// };
