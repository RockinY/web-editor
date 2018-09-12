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

  mentionSearchAsync = (searchValue) => {
    if (searchValue) {
      return new Promise(
        (resolve, reject) => {
          let url = `https://api.github.com/search/users?q=${searchValue}`
          fetch(url)
          .then( (response) => { return response.json() })
          .then((data) => {
            let users = data.items.slice(0, 5).map( (u, i) => { return { name: u.login, link: u.html_url, avatar: u.avatar_url } })
            resolve({ suggestions: users })
          })
          .catch(() => {
            resolve({ suggestions: [] })
          })
        }
      )
    } else {
      return new Promise((resolve, reject) => {
        resolve({ suggestions: [] })
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          mentionSearchAsync={this.mentionSearchAsync}
          readOnly={this.props.readOnly}
        />
      </React.Fragment>
    )
  }
}

