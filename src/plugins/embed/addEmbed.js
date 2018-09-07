import {
  Entity,
  EditorState,
  AtomicBlockUtils
} from 'draft-js'

export default (editorState, attrs) => {
  const urlType = 'embed'
  const entityKey = Entity.create(urlType, 'IMMUTABLE', {
    src: (attrs && attrs.url) || null
  })
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  )
  
  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  )
}
