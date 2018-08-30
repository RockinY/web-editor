import React from 'react'
import createInlineStyleButton from '../utils/createInlineStyleButton'
import {
  IconButton
} from '../../../components/Button'

export default createInlineStyleButton({
  style: 'BOLD',
  Button: (
    <IconButton glyph='bold' />
  )
})