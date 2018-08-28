import React from 'react'
import { BlockPicker } from 'react-color'

class Picker extends React.Component {
  handleChange = (color) => {
    this.props.onSelected(color.hex)
  }

  render () {
    return (
      <BlockPicker
        onChange={handleChange}
      />
    )
  }
}