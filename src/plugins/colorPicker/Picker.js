import React from 'react'
import {
  ToolbarWrapper
} from '../toolbar/components/styles'
import {
  IconButton
} from '../../components/Button'
import Icon from '../../components/Icons'

const colors = [
  '#191970', '#0074D9', '#7FDBFF', '#39CCCC'
]

class Picker extends React.Component {
  render () {
    return (
      <ToolbarWrapper styles={this.props.position} show={true}>
        {
          colors.map((color, i) => (
            <IconButton
              key={i}
              glyph='square'
              style={{color}}
              onClick={() => this.props.onSelected(color)}
            />
          ))
        }
      </ToolbarWrapper>
    )
  }
}

export default Picker