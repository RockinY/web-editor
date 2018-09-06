import React from 'react'
import addImage from './addImage'
import ImageComponent from './Image'
import decorateComponentWithProps from 'decorate-component-with-props';

export default () => {
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const editorState = getEditorState()
        const contentState = editorState.getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'IMAGE' || type === 'image') {
          const blockKey = block.getKey()
          const currentSelection = editorState.getSelection()
          const focusKey = currentSelection.getFocusKey()
          const active = blockKey === focusKey
          return {
            component: decorateComponentWithProps(ImageComponent, { active }),
            editable: false,
          };
        }
        return null;
      }

      return null;
    },
    addImage
  }
}