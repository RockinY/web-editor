import React from 'react'
import { TwitterPicker } from 'react-color'

class Picker extends React.Component {
  handleChange = (color) => {
    this.props.onSelected(color.hex)
  }

  render () {
    return (
      <TwitterPicker
        onChange={this.handleChange}
      />
    )
  }
}

export default Picker