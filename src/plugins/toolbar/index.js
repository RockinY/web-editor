import createStore from '../createStore'
import decorateComponentWithProps from 'decorate-component-with-props'
import Toolbar from './components/Toolbar'

export default (config = {}) => {
  const store = createStore({
    isVisible: false
  })

  const toolbarProps = {
    store
  }

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState)
      store.updateItem('setEditorState', setEditorState)
    },
    onChange: (editorState) => {
      const selection = editorState.getSelection()
      if (selection.getHasFocus() && !selection.isCollapsed()) {
        store.updateItem('isVisible', true)
      } else {
        store.updateItem('isVisible', false)
      }
      return editorState
    },
    Toolbar: decorateComponentWithProps(Toolbar, toolbarProps)
  }
}