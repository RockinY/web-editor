// @flow
import React, { Component } from 'react';
import EntryComponent from './defaultEntryComponent'

type Props = {
  entryComponent: any,
  searchValue: string,
  onMentionSelect: Function
}

export default class Entry extends Component<Props> {
  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.props.onMentionSelect(this.props.mention);
      this.mouseDown = false;
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  render() {
    const { mention, searchValue, isFocused, id } = this.props;
    return (
      <EntryComponent
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        id={id}
        mention={mention}
        isFocused={isFocused}
      />
    );
  }
}
