import createStore from '../createStore'
import decorateComponentWithProps from 'decorate-component-with-props'
import Toolbar from './components/Toolbar'
import getModalByType from './getModalByType'
import {
  BoldButton,
  UnderlineButton,
  BlockquoteButton,
  TextColorButton,
  LinkButton
} from '../button'

export default (config = {}) => {
  const store = createStore({
    isVisible: false
  })

  const {
    structure = [
      BoldButton,
      UnderlineButton,
      BlockquoteButton,
      TextColorButton,
      LinkButton
    ]
  } = config

  const toolbarProps = {
    store,
    structure,
    getModalByType
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