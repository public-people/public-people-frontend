import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';


export default function BounceWrap({ children, delay }) {
  const style = delay ? { animationDelay: `${delay}s` } : null;

  return (
    <div className={styles.root} {...{ style }}>{children}</div>
  );
}


BounceWrap.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};


BounceWrap.defaultProps = {
  delay: null,
};
