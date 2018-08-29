import Link from './Link';
import linkStrategy from './linkStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';

export default (config = {}) => {
  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: decorateComponentWithProps(Link, {})
      },
    ],
  };
};
