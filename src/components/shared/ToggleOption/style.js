import styled from "styled-components"
import { margins } from "../../../styles/index"

export const Container = styled.div`
  max-width: 59px;
  min-width: 59px;
  display: flex;
  align-items: center;
  width: 59px;
  height: 25px;
  border-radius: 50px;
  border: ${(props) => (props?.border ? "1px solid #FFF" : "none")};
  background: #0097e6;
  padding: 10px 5px;
  ${margins};
  pointer-events: ${props => props?.disabled ? 'none' : 'unset'};

  &:after {
    transition-duration: 300ms;
    content: "";
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50px;
    display: block;
    margin-left: ${(props) => (props?.isActive ? "30px" : "0")};
  }
`
