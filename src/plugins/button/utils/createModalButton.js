import React, { Component } from 'react'
import {
  IconButton
} from '../../../components/Button'

export default ({ type, icon }) => (
  class embedButton extends Component {

    onClick = (e) => {
      e.preventDefault()
      this.props.openModal(type)
    }

    preventBubblingUp = (event) => { event.preventDefault() }

    render () {
      return (
        <div
          onMouseDown={this.preventBubblingUp}
        >
          <IconButton
            onClick={this.onClick}
            glyph={icon}
          />
        </div>

      )
    }
  }
)
