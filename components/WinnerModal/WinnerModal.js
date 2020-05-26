import React, { useContext } from "react";
import globalStyles from "../../constants/globalStyles";

// context
import AppStore from "../../contexts/GlobalContext";

// iconic
import { Ionicons } from "@expo/vector-icons";

// components
import Button from "../Button/Button";

// sc
import {
  WinnerModalComponent,
  WinnerModalView,
  WinnerModalTopView,
  WinnerModalWinnerView,
  WinnerModalWinnerText,
  WinnerModalMidView,
  WinnerModalIconView,
  WinnerModalIconScoreView,
  WinnerModalIconScoreText,
  WinnerModalBotView,
  WinnerModalScoreListView,
  WinnerModalScoreListWrap,
  WinnerModalScoreListLeftView,
  WinnerModalScoreListRightView,
  WinnerModalScoreListText,
  WinnerModalControlls,
  WinnerModalButtonView,
} from "./WinnerModalStyles";

const WinnerModal = ({ visible, winner }) => {
  const { stopTheGame, score } = useContext(AppStore);
  const { clPrimary, clWhite } = globalStyles;
  const { hold } = score[winner] || {};

  return (
    <WinnerModalComponent visible={visible ? true : false} animationType="fade">
      <WinnerModalView>
        <WinnerModalTopView>
          <WinnerModalWinnerView>
            <WinnerModalWinnerText>
              Player {winner || 0} is a winner!
            </WinnerModalWinnerText>
          </WinnerModalWinnerView>
        </WinnerModalTopView>
        <WinnerModalMidView>
          <WinnerModalIconView>
            <Ionicons name="md-trophy" size={200} color={"gold"} />
          </WinnerModalIconView>
          <WinnerModalIconScoreView>
            <WinnerModalIconScoreText>
              Score: {hold || 0}
            </WinnerModalIconScoreText>
          </WinnerModalIconScoreView>
        </WinnerModalMidView>
        <WinnerModalBotView>
          <WinnerModalScoreListView>
            {Object.keys(score).map((key, id) => {
              if (key !== String(winner)) {
                return (
                  <WinnerModalScoreListWrap key={key + id}>
                    <WinnerModalScoreListLeftView>
                      <WinnerModalScoreListText>
                        Player {key}:
                      </WinnerModalScoreListText>
                    </WinnerModalScoreListLeftView>
                    <WinnerModalScoreListRightView>
                      <WinnerModalScoreListText>
                        {score[key].hold}
                      </WinnerModalScoreListText>
                    </WinnerModalScoreListRightView>
                  </WinnerModalScoreListWrap>
                );
              }
            })}
          </WinnerModalScoreListView>
        </WinnerModalBotView>
        <WinnerModalControlls>
          <WinnerModalButtonView>
            <Button
              bgc={clPrimary}
              txc={clWhite}
              title={"New Game"}
              action={() => {
                stopTheGame();
              }}
            />
          </WinnerModalButtonView>
        </WinnerModalControlls>
      </WinnerModalView>
    </WinnerModalComponent>
  );
};

export default WinnerModal;
