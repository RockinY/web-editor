import addEmbed from './addEmbed'
import EmbedComponent from './Embed'

export default (config = {}) => {
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const editorState = getEditorState()
        const contentState = editorState.getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'embed') {
          return {
            component: EmbedComponent,
            editable: false,
          };
        }
        return null;
      }

      return null;
    },
    addEmbed
  }
}