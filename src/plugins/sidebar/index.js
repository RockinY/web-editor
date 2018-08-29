// @flow
import React from 'react'
import createStore from '../createStore'
import decorateComponentWithProps from 'decorate-component-with-props'
import Sidebar from './components/Sidebar'

export default (config = {}) => {
  const store = createStore({
    isVisible: false
  })

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState)
      store.updateItem('setEditorState', setEditorState)
      store.updateItem('getEditorRef', getEditorRef)
    },
    // Re-Render the sidebar on every change
    onChange: (editorState) => {
      store.updateItem('editorState', editorState)
      return editorState
    },
    Sidebar: decorateComponentWithProps(Sidebar, { store })
  }
}