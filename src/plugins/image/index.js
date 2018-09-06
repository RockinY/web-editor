import React from 'react'
import addImage from './addImage'
import ImageComponent from './Image'

export default (config = {}) => {
  let Image = config.imageComponent || ImageComponent;
  if (config.decorator) {
    Image = config.decorator(Image);
  }
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
            component: Image,
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