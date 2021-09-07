import styled from "styled-components"

export const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  height: 60px;
  color: #fff;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 15px;
  background: ${(props) => (props?.isActive ? "#FFFFFF1A" : "#45F391")};
  border: none;
  transition: 300ms;

  &:hover {
    filter: brightness(105%);
  }
`
