import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  & > span {
    text-align: center;
    color: #45f391;
    margin-bottom: 40px;
    font-weight: 400;
  }
`

export const BoxFlex = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
