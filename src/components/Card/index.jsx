import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';


export default function Card(props) {
  const {
    title,
    children,
    level,
    highlighted,
    link,
    footer,
    height,
    loading,
  } = props;

  const rootCss = [
    styles.root,
    (highlighted ? styles.isHighlighted : null),
    (link ? styles.isLink : null),
    (loading ? styles.isLoading : null),
  ].join(' ');

  const titleCss = [
    styles.title,
    (link ? styles.isLink : null),
  ].join(' ');

  const removePadding = footer && height;
  const innerCss = [
    styles.inner,
    (removePadding ? styles.hasFooter : null),
  ].join(' ');


  const HeadingLevel = `h${level}`;
  const ConditionalTag = typeof link === 'string' ? 'a' : 'div';

  return (
    <ConditionalTag
      className={rootCss}
      style={{ height }}
      href={typeof link === 'string' ? link : null}
    >
      <div className={innerCss}>
        {title ? <HeadingLevel className={titleCss}>{title}</HeadingLevel> : null }
        <div className={styles.content}>
          {children}
        </div>
      </div>
      { footer ? <div className={styles.footer}>{footer}</div> : null}
    </ConditionalTag>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  highlighted: PropTypes.bool,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  height: PropTypes.number,
  loading: PropTypes.bool,
};

Card.defaultProps = {
  title: null,
  level: 6,
  highlighted: false,
  link: false,
  footer: false,
  height: null,
  children: null,
  loading: false,
};
