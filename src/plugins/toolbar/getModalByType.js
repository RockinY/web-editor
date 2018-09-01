import ColorModal from '../modal/colorModal'

export default (type) => {
  switch (type) {
    case 'color':
      return ColorModal
    default:
      return undefined
  }
}
