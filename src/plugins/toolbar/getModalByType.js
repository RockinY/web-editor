import ColorModal from '../modal/colorModal'
import LinkModal from '../modal/linkModal'

export default (type) => {
  switch (type) {
    case 'color':
      return ColorModal
    case 'link':
      return LinkModal
    default:
      return undefined
  }
}
