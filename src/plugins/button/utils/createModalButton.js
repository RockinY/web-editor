import React, { Component } from 'react'
import {
  IconButton
} from '../../../components/Button'
import {
  ButtonWrapper
} from '../styles'

export default ({ type, icon }) => (
  class embedButton extends Component {

    onClick = (e) => {
      e.preventDefault()
      this.props.openModal(type)
    }

    preventBubblingUp = (event) => { event.preventDefault() }

    render () {
      return (
        <ButtonWrapper
          onMouseDown={this.preventBubblingUp}
        >
          <IconButton
            onClick={this.onClick}
            glyph={icon}
            size={24}
          />
        </ButtonWrapper>

      )
    }
  }
)
