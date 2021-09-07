import { css } from "styled-components"

const marginTop = css`
  margin-top: ${(props) => props.mt}px;
`
const marginBottom = css`
  margin-bottom: ${(props) => props.mb}px;
`

const marginLeft = css`
  margin-left: ${(props) => props.ml}px;
`

const marginRight = css`
  margin-right: ${(props) => props.mr}px;
`

export const margins = css`
  ${(props) => props.mt && marginTop}
  ${(props) => props.mb && marginBottom}
  ${(props) => props.ml && marginLeft};
  ${(props) => props.mr && marginRight}
`
