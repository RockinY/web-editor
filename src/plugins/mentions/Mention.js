import React from 'react'
import { MentionLink } from './styles'

const Mention = (props) => {
  const { entityKey, contentState, children } = this.props

  const mention = contentState.getEntity(entityKey).getData().mention

  return (
    <MentionLink
      target='_blank'
      href={mention.link}
    >
      {children}
    </MentionLink>
  )
}