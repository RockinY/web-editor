import React from 'react'
import {
  IconButton
} from '../../components/Button'

export const colors = [
  '#DE350B', '#0052CC', '#00B8D9', '#36B37E'
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