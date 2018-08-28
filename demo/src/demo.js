import React, { Component } from 'react'
import rawJSON from './raw'
import Editor, { fromJSON } from 'draftjs-web-editor'

export default class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: fromJSON(rawJSON)
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState: editorState
    })
    console.log(editorState)
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    )
  }
}

