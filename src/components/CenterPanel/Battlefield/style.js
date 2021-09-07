import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  min-height: 100px;
  height: 12rem;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 10px;
  font-size: 90px;
  color: #6A6A6A;
  cursor: pointer;
  box-shadow: 0px 0px 0px #00000029;

  transition: 300ms;

  &:hover{
    box-shadow: 0px 3px 6px #45F391;
  }
`
