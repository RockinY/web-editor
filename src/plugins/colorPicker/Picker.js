import React from 'react'
import {
  IconButton
} from '../../components/Button'

export const colors = [
  '#191970', '#0074D9', '#7FDBFF'
]

class Picker extends React.Component {
  onColorClick = (color) => {
    this.props.onSelected(color)
  }
  render () {
    return (
      <React.Fragment>
        {
          colors.map((color, i) => (
            <IconButton
              key={i}
              glyph='square'
              style={{color}}
              onClick={() => this.onColorClick(color)}
            />
          ))
        }
      </React.Fragment>
    )
  }
}

export default Picker