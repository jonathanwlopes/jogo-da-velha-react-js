import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  
  & > span {
    margin-bottom: 30px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
`

export const ContentBox = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
`

export const Play = styled.span`
  color: #6a6a6a;
  font-size: 35px;
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`

export const PlayerName = styled.span`
  color: #6a6a6a;
  font-size: 18px;
`

export const DidPlay = styled.span`
  color: #0097e6;
  font-size: 14px;
`
