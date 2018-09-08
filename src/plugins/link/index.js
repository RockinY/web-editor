import Link from './Link'
import linkStrategy from './linkStrategy'

const linkPlugin = (config = {}) => {

  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: Link
      }
    ]
  }
}

export default linkPlugin