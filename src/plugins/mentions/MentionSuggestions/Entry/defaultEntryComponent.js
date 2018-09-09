import React from 'react';
import {
  Avatar,
  EntryText,
  EntryWrapper
} from './styles'

const defaultEntryComponent = (props) => {
  const { mention } = props;

  return (
    <EntryWrapper>
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
