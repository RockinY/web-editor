import Link from './Link';
import linkStrategy from './linkStrategy';

export default (config = {}) => {
  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: Link,
      },
    ],
  };
};
