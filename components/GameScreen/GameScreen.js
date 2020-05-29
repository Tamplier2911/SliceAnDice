import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// contexts
import AppStore from "../../contexts/GlobalContext";

// components
import Button from "../Button/Button";
import Dice from "../Dice/Dice";

// screens
import WinnerModal from "../WinnerModal/WinnerModal";
import WinnerView from "../WinnerView/WinnerView";

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

const GameScreen = ({ dimensions }) => {
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

  const { orientation, width } = dimensions;

  return (
    <GameScreenView>
      {winner && orientation === "portrait" ? (
        <WinnerModal visible={winner} winner={winner} />
      ) : null}
      {winner && orientation === "landscape" ? (
        <WinnerView winner={winner} orientation={orientation} width={width} />
      ) : (
        <React.Fragment>
          <GameScreenViewTop>
            <GameScreenMetaView>
              <GameScreenPlayerView>
                <GameScreenPlayerText orientation={orientation}>
                  Player: {currentPlayer}
                </GameScreenPlayerText>
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
              <Dice
                num={currentRoll}
                size={orientation === "landscape" ? width * 0.25 : width * 0.7}
              />
            </GameScreenDiceView>
          </GameScreenViewTop>

          {currentRoll === 1 ? (
            <GameScreenViewBot row={currentRoll} orientation={orientation}>
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
            <GameScreenViewBot row={currentRoll} orientation={orientation}>
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
        </React.Fragment>
      )}
    </GameScreenView>
  );
};

export default GameScreen;
