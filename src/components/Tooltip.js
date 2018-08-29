import { css } from 'styled-components'
import 'css.escape'

const returnTooltip = props => {
  switch (props.tipLocation) {
    case 'top-left':
      return `
          &:after {
            bottom: calc(100% + 4px);
            right: 0;
          }
          &:before {
            bottom: 100%;
            right: 0;
            transform: translateX(-100%);
            border-bottom-width: 0;
            border-top-color: #172B4D;
          }
      `
    case 'top-right':
      return `
          &:after {
            bottom: calc(100% + 4px);
            left: 0;
          }
          &:before {
            bottom: 100%;
            left: 0;
            transform: translateX(100%);
            border-bottom-width: 0;
            border-top-color: #172B4D;
          }
      `
    case 'top':
      return `
          &:after {
            bottom: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
          }
          &:before {
            bottom: calc(100% + 3px);
            left: 50%;
            transform: translateX(-50%);
            border-bottom-width: 0;
            border-top-color: #172B4D;
          }
      `
    case 'right':
    default:
      return `
          &:after {
            top: 50%;
            left: calc(100% + 4px);
            transform: translateY(-50%);
          }
          &:before{
            top: calc(50% - 5px);
            left: 100%;
            border-left-width: 0;
            border-right-color: #172B4D;
          }
      `
    case 'bottom-left':
      return `
          &:after {
            top: calc(100% + 4px);
            right: 0;
          }
          &:before {
            top: 100%;
            right: 0;
            transform: translateX(-100%);
            border-top-width: 0;
            border-bottom-color: #172B4D;
          }
      `
    case 'bottom-right':
      return `
          &:after {
            top: calc(100% + 4px);
            left: 0;
          }
          &:before {
            top: 100%;
            left: 0;
            transform: translateX(100%);
            border-top-width: 0;
            border-bottom-color: #172B4D;
          }
      `
    case 'bottom':
      return `
        &:after {
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
        }
        &:before {
          top: calc(100% + 3px);
          left: 50%;
          transform: translateX(-50%);
          border-top-width: 0;
          border-bottom-color: #172B4D;
        }
      `
    case 'left':
      return `
          &:after {
            right: calc(100% + 4px);
            top: 50%;
            transform: translateY(-50%);
          }
          &:before{
            right: 100%;
            top: calc(50% - 5px);
            border-right-width: 0;
            border-left-color: #172B4D;
          }
      `
  }
}

export default props => css`
  position: relative;

  &:after,
  &:before {
    line-height: 1;
    user-select: none;
    pointer-events: none;
    position: absolute;
    opacity: 0;
    display: block;
    text-transform: none;
  }

  &:before {
    content: '';
    z-index: 6002;
    border: 6px solid transparent;
  }

  &:after {
    content: ${props.tipText
      ? `'${CSS.escape(props.tipText)}'`
      : "''"};
    z-index: 6001;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Segoe', sans-serif;
    font-size: 14px;
    font-weight: 500;
    min-width: 8px;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(23, 43, 77, 0.25);
    background: #172B4D;
    color: #FFFFFF;
  }

  ${props.tipText ? returnTooltip(props) : ''};

  &:hover:after,
  &:hover:before {
    opacity: 1;
    transition: opacity 0.1s ease-in 0.1s;
  }
`