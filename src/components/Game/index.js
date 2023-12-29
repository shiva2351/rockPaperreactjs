import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  ZScore,
  Header,
  Headers,
  Image,
  BtnAgain,
  GameCard,
  Container,
  Footer,
  ScoreBoard,
  ScoreText,
  GameBtn,
  ResultView,
  ResultDiv,
  ResultCard,
  ResultHead,
  ResultPara,
  RuleImg,
} from './StyledComponent'

import 'reactjs-popup/dist/index.css'

const options = ['ROCK', 'SCISSORS', 'PAPER']

class Game extends Component {
  state = {
    gameView: true,
    score: 0,
    userOption: 'ROCK',
    botOption: 'ROCK',
    rText: 'll',
  }

  clickImg = option => {
    const kk = Math.random() * options.length
    const bot = options[Math.floor(kk)]
    let text
    let num

    this.setState(prevState => {
      const {score} = prevState
      if (option === bot) {
        text = 'IT IS DRAW'
        num = score
      } else if (
        (option === 'SCISSORS' && bot === 'ROCK') ||
        (option === 'PAPER' && bot === 'SCISSORS') ||
        (option === 'ROCK' && bot === 'PAPER')
      ) {
        console.log('lose')
        text = 'YOU LOSE'
        num = score - 1
      } else {
        text = 'YOU WON'
        num = score + 1
      }
      return {
        userOption: option,
        botOption: bot,
        score: num,
        rText: text,
        gameView: false,
      }
    })
  }

  againPlay = () => {
    this.setState({gameView: true})
  }

  render() {
    const {choicesList} = this.props
    const {gameView, rText, score, userOption, botOption} = this.state
    const yImg = choicesList.filter(eachItem => eachItem.id === userOption)
    const opImg = choicesList.filter(eachItem => eachItem.id === botOption)

    return (
      <Container>
        <Header>
          <Headers>
            Rock
            <br /> Paper
            <br /> Scissors
          </Headers>
          <ScoreBoard>
            <ScoreText>Score</ScoreText>
            <ZScore>{score}</ZScore>
          </ScoreBoard>
        </Header>
        <>
          {gameView ? (
            <GameCard>
              {choicesList.map(eachItem => {
                const imgClick = () => {
                  this.clickImg(eachItem.id)
                }
                console.log(eachItem.id === 'PAPER')
                return (
                  <GameBtn
                    data-testid={`${eachItem.id.toLowerCase()}Button`}
                    type="button"
                    key={eachItem.id}
                    onClick={imgClick}
                  >
                    <Image alt={eachItem.id} src={eachItem.imageUrl} />
                  </GameBtn>
                )
              })}
            </GameCard>
          ) : (
            <ResultView>
              <ResultCard>
                <ResultDiv>
                  <ResultHead>YOU</ResultHead>
                  <Image alt="your choice" src={yImg[0].imageUrl} />
                </ResultDiv>
                <ResultDiv>
                  <ResultHead>OPPONENT</ResultHead>
                  <Image alt="opponent choice" src={opImg[0].imageUrl} />
                </ResultDiv>
              </ResultCard>
              <ResultPara>{rText}</ResultPara>
              <BtnAgain onClick={this.againPlay} type="button">
                PLAY AGAIN
              </BtnAgain>
            </ResultView>
          )}
        </>
        <Footer>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <div>
                <button onClick={() => close()} type="button">
                  . <RiCloseLine />
                </button>
                <RuleImg
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </div>
            )}
          </Popup>
        </Footer>
      </Container>
    )
  }
}

export default Game
