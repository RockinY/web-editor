import React, { Component } from 'react'
import rawJSON from './raw'
import Editor, { fromJSON, toJSON } from 'draftjs-web-editor'

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
    console.log(toJSON(editorState))
  }

  mentionSearchAsync = (value) => {
    return new Promise(
      (resolve, reject) => {
        let url = `https://api.github.com/search/users?q=${searchValue}`
        fetch(url)
        .then( (response) => { return response.json() })
        .then((data) => {
          let users = data.items.map( (u, i) => { return { name: u.login, link: u.html_url, avatar: u.avatar_url } })
          resolve({ suggestions: users })
        })
      }
    )
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        mentionSearchAsync={this.mentionSearchAsync}
      />
    )
  }
}

