import Editor from './components/Editor'
import * as convert from './convert'
/* styles */
import './styles/global'
import './styles/prism'
import 'draft-js/dist/Draft.css'

export const toJSON = convert.toJSON
export const fromJSON = convert.fromJSON
export const toPlainText = convert.toPlainText
export const fromPlainText = convert.fromPlainText

export default Editor