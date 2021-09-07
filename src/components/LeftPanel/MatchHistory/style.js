import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  max-height: 40%;
  height: 40%;

  & > span {
    margin-bottom: 30px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const WinnerPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px 15px;
  border-radius: 10px;

  span:first-of-type {
    color: #45f391;
    font-size: 20px;
    line-height: 27px;
  }

  span {
    color: #6a6a6a;
    font-size: 14px;
  }
`

export const SceneryPanel = styled.div`
  width: 60px;
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 12px;
    color: #6a6a6a;
    width: 12px;
    height: 18px;
    background: #fff;
    padding: 8px;
    margin: 2px;
  }
`
