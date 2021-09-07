import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 40px;
  border-radius: 10px;
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : 0)};

  input {
    border-radius: 10px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    border: none;
  }
`
