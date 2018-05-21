import { Children } from 'react';


export default function addPropsToChildren(children, props) {
  const addProps = child => ({
    ...child,
    props: {
      ...child.props,
      ...props,
    },
  });

  return Children.map(children, addProps);
}
