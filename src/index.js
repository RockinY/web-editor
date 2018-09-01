import Editor from './components/Editor'
import * as convert from './convert'
import './styles/global'

export const toJSON = convert.toJSON
export const fromJSON = convert.fromJSON
export const toPlainText = convert.toPlainText
export const fromPlainText = convert.fromPlainText

export default Editor