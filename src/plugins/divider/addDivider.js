import { EditorState, AtomicBlockUtils } from 'draft-js';

export default (editorState, data) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'divider',
    'IMMUTABLE',
    data
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );

  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );
};