import React, { Component } from 'react'
import { EmbedContainer, EmbedInput } from './styles'
import { IconButton } from '../../../components/Button'

class EmbedInputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  onChange = (e) => {
    this.setState({url: e.target.value})
  }

  render() {
    const { onSubmit } = this.props
    const { url } = this.state

    return (
      <EmbedContainer>
        <EmbedInput
          type="text"
          onChange={this.onChange}
          placeholder="输入网站提供的嵌入地址"
        />
        <IconButton
          glyph="send-fill"
          onClick={() => onSubmit(url)}
          size={24}
        />
      </EmbedContainer>
    )
  }
}

export default EmbedInputComponent