import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// contexts
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";
import Dice from "../Dice/Dice";

// screens
import WinnerModal from "../WinnerModal/WinnerModal";

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
    winner,
    score,
    currentPlayer,
  } = useContext(AppStore);
  const { current, hold } = score[currentPlayer];
  const { clWhite, clPrimary } = globalStyles;

  return (
    <GameScreenView>
      {winner ? <WinnerModal visible={winner} winner={winner} /> : null}
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
              bgc={clPrimary}
              txc={clWhite}
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
              bgc={clPrimary}
              txc={clWhite}
              title={"Hold"}
              action={() => {
                holdCurrentScore(current, currentPlayer);
              }}
            />
          </GameScreenButtonWrap>
          <GameScreenButtonWrap row={currentRoll}>
            <Button
              bgc={clPrimary}
              txc={clWhite}
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
