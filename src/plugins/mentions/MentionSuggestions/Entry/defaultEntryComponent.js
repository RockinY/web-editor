import React from 'react';
import {
  Avatar,
  EntryText,
  EntryWrapper
} from './styles'

const defaultEntryComponent = (props) => {
  const {
    mention,
    ...parentProps
  } = props;

  return (
    <EntryWrapper {...parentProps}>
      <Avatar
        src={mention.avatar}
        role="presentation"
      />
      <EntryText>
        {mention.name}
      </EntryText>
    </EntryWrapper>
  );
};

export default defaultEntryComponent;
