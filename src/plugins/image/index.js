import React from 'react'
import addImage from './addImage'
import ImageComponent from './Image'

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
          return {
            component: ImageComponent,
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