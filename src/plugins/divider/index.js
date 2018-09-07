import addDivider from './addDivider'
import Divider from './Divider'

const createDividerPlugin = (config = {}) => {
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'divider') {
          return {
            component: Divider,
            editable: false
          };
        }
      }

      return null;
    },
    addDivider
  };
};

export default createDividerPlugin;
