import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
`
export const ScoreText = styled.p`
  font-size: 20px;
  margin-bottom: 0;
`
export const ScoreBoard = styled.div`
  background-color: #ffffff;
  width: 100px;
  height: 80px;
  border-radius: 9px;
  font-weight: normal;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Headers = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: normal;
  font-family: 'Bree Serif';
`
export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding: 10px;
  padding-top: 20px;
`

export const BtnAgain = styled.button`
  font-size: 13px;
  font-weight: 555;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 0;
  @media screen and (min-width: 768px) {
    font-size: 29px;
    font-weight: 540;
  }
`
export const RuleImg = styled.img`
  width: 100%;
`
export const Image = styled.img`
  width: 70px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const ResultHead = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const ResultPara = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0;
  margin: 20px;
  @media screen and (min-width: 768px) {
    font-size: 29px;
  }
`
export const Footer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  width: 95%;
  order: 0;
`
export const GameBtn = styled.button`
  border: 0;
  background-color: #223a5f;
  padding: 0;
  margin: 0;
`
export const GameCard = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const ResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultCard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ZScore = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 0;
  font-weight: 700;
`
