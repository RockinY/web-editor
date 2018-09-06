import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    background-color: #ffffff;
    color: #16171a;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  body {
    display: flex;
    box-sizing: border-box;
    flex: auto;
    align-self: stretch;
    max-width: 100%;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  ::-moz-selection {
    /* Code for Firefox */
    background: #006644;
    color: #ffffff;
  }

  ::selection {
    background: #006644;
    color: #ffffff;
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #a3afbf;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a3afbf;
    opacity: 1;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a3afbf;
    opacity: 1;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a3afbf;
  }

  #root {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    flex-direction: column;
    -ms-flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .draftjs-web-editor {
    font-size: 16px;
    line-height: 24px;
    color: #16171a;
  }

  .draftjs-web-editor p {
    color: inherit;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    display: block;
  }

  .draftjs-web-editor p + p {
    margin-top: 16px;
  }

  .draftjs-web-editor > *:first-of-type {
    margin-top: 16px;
  }

  .draftjs-web-editor img {
    max-width: 100%;
    display: inline;
    border-radius: 4px;
    transition: box-shadow 0.2s;
    display: block;
  }

  .draftjs-web-editor img:hover {
    cursor: pointer;
    transition: box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .draftjs-web-editor em {
    color: inherit;
    font-size: inherit;
    font-style: italic;
  }

  .draftjs-web-editor strong {
    color: inherit;
    font-size: inherit;
    font-weight: 700;
  }

  .draftjs-web-editor ul,
  .draftjs-web-editor ol {
    color: inherit;
    margin: 8px 0;
    margin-left: 16px;
  }

  .draftjs-web-editor li {
    color: inherit;
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 400;
  }

  .draftjs-web-editor blockquote {
    color: #828c99;
    border-left: 4px solid #36B37E;
    padding: 4px 8px 4px 16px;
    font-size: 24px;
    font-weight: 300;
    font-style: italic;
    line-height: 1.4;
    margin: 16px 0;
  }

  .draftjs-web-editor blockquote p {
    margin-top: 0;
  }

  .draftjs-web-editor a {
    color: #57D9A3;
    font-weight: 500;
    text-decoration: none;
    font-size: inherit;
    word-wrap: break-word;
    line-height: inherit;
  }

  .draftjs-web-editor a:hover {
    text-decoration: underline;
  }

  .draftjs-web-editor a:visited {
    opacity: 0.6;
    transition: opacity 0.2s ease-in;
  }

  .draftjs-web-editor code {
    font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    background-color: #f5f8fc;
    padding: 2px 4px;
    display: inline;
    width: 100%;
    border: 1px solid #dfe7ef;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .draftjs-web-editor pre {
    margin: 16px 0;
    display: block;
  }

  .draftjs-web-editor pre code {
    padding: 8px 16px;
    display: block;
    white-space: pre-wrap;
    position: relative;
  }

  .draftjs-web-editor div[data-block='true'] {
    margin-top: 12px;
  }

  .draftjs-web-editor div[data-block='true']:first-of-type {
    margin-top: 0;
  }

  .draftjs-web-editor span[data-text='true'] {
    line-height: 1.4;
  }

  .draftjs-web-editor code span {
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .draftjs-web-editor iframe {
    margin: 1rem 0;
  }

  .draftjs-web-editor hr {
    width: 100%;
    height: 1px;
    background: #dfe7ef;
    display: block;
    margin: 32px 0;
  }

  .draftjs-web-editor h1 {
    font-size: 24px;
    line-height: 40px;
    border-bottom: 1px solid #dfe7ef;
    font-weight: 800;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .draftjs-web-editor h2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .draftjs-web-editor h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  .draftjs-web-editor h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .draftjs-web-editor h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .draftjs-web-editor h6 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }
`