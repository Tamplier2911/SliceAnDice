import React, { useContext } from "react";

// contexts
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";
import Dice from "../Dice/Dice";

// sc
import {
  GameScreenView,
  GameScreenViewTop,
  GameScreenMetaView,
  GameScreenPlayerView,
  GameScreenPlayerText,
  GameScreenScoreView,
  GameScreenScoreTextView,
  GameScreenScoreText,
  GameScreenDiceView,
  GameScreenViewBot,
  GameScreenButtonWrap,
} from "./GameScreenStyles";

const GameScreen = () => {
  const {
    rollDice,
    holdCurrentScore,
    nextPlayer,
    currentRoll,
    stopTheGame,
    winner,
    score,
    currentPlayer,
  } = useContext(AppStore);
  const { current, hold } = score[currentPlayer];
  console.log(score, currentPlayer, currentRoll, winner);

  /*
    so winner pops up when player reaches 100 points

    implement modal that is:
    
    1) when winner pops becomes visible 
    it has start new game button and trophy 
    + other people hold scores.
    
    2) once player press start new game - 
    perform stopTheGame() method, which then 
    reinitialize the game, prompting user to home screen.
  */

  return (
    <GameScreenView>
      <GameScreenViewTop>
        <GameScreenMetaView>
          <GameScreenPlayerView>
            <GameScreenPlayerText>Player: {currentPlayer}</GameScreenPlayerText>
          </GameScreenPlayerView>
          <GameScreenScoreView>
            <GameScreenScoreTextView>
              <GameScreenScoreText>Hold: {hold}</GameScreenScoreText>
            </GameScreenScoreTextView>
            <GameScreenScoreTextView>
              <GameScreenScoreText>Curr: {current}</GameScreenScoreText>
            </GameScreenScoreTextView>
          </GameScreenScoreView>
        </GameScreenMetaView>
        <GameScreenDiceView>
          <Dice num={currentRoll} />
        </GameScreenDiceView>
      </GameScreenViewTop>

      {currentRoll === 1 ? (
        <GameScreenViewBot row={currentRoll}>
          <GameScreenButtonWrap row={currentRoll}>
            <Button
              bgc={"#006eff"}
              txc={"#fff"}
              title={"Next Player Turn!"}
              action={() => {
                nextPlayer();
              }}
            />
          </GameScreenButtonWrap>
        </GameScreenViewBot>
      ) : (
        <GameScreenViewBot row={currentRoll}>
          <GameScreenButtonWrap row={currentRoll}>
            <Button
              bgc={"#006eff"}
              txc={"#fff"}
              title={"Hold"}
              action={() => {
                holdCurrentScore(current, currentPlayer);
              }}
            />
          </GameScreenButtonWrap>
          <GameScreenButtonWrap row={currentRoll}>
            <Button
              bgc={"#006eff"}
              txc={"#fff"}
              title={"Roll"}
              action={() => {
                rollDice(currentPlayer);
              }}
            />
          </GameScreenButtonWrap>
        </GameScreenViewBot>
      )}
    </GameScreenView>
  );
};

export default GameScreen;
