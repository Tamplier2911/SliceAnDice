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
  WinnerViewComponent,
  WinnerViewView,
  WinnerViewTopView,
  WinnerViewWinnerView,
  WinnerViewWinnerText,
  WinnerViewMidView,
  WinnerViewIconView,
  WinnerViewIconScoreView,
  WinnerViewIconScoreText,
  WinnerViewBotView,
  WinnerViewScoreListView,
  WinnerViewScoreListWrap,
  WinnerViewScoreListLeftView,
  WinnerViewScoreListRightView,
  WinnerViewScoreListText,
  WinnerViewControlls,
  WinnerViewButtonView,
} from "./WinnerViewStlyes";

const WinnerView = ({ winner, orientation, width }) => {
  const { stopTheGame, score } = useContext(AppStore);
  const { clPrimary, clWhite, clTrophy } = globalStyles;
  const { hold } = score[winner] || {};

  return (
    <WinnerViewComponent>
      <WinnerViewView orientation={orientation}>
        <WinnerViewTopView orientation={orientation}>
          <WinnerViewWinnerView>
            <WinnerViewWinnerText orientation={orientation}>
              Player {winner || 0} is a winner!
            </WinnerViewWinnerText>
          </WinnerViewWinnerView>
        </WinnerViewTopView>
        <WinnerViewMidView orientation={orientation}>
          <WinnerViewIconView>
            <Ionicons
              name="md-trophy"
              size={orientation === "landscape" ? width * 0.1 : width * 0.7}
              color={clTrophy}
            />
          </WinnerViewIconView>
          <WinnerViewIconScoreView>
            <WinnerViewIconScoreText orientation={orientation}>
              Score: {hold || 0}
            </WinnerViewIconScoreText>
          </WinnerViewIconScoreView>
        </WinnerViewMidView>
        <WinnerViewBotView orientation={orientation}>
          <WinnerViewScoreListView>
            {Object.keys(score).map((key, id) => {
              if (key !== String(winner)) {
                return (
                  <WinnerViewScoreListWrap key={key + id}>
                    <WinnerViewScoreListLeftView>
                      <WinnerViewScoreListText orientation={orientation}>
                        Player {key}:
                      </WinnerViewScoreListText>
                    </WinnerViewScoreListLeftView>
                    <WinnerViewScoreListRightView>
                      <WinnerViewScoreListText orientation={orientation}>
                        {score[key].hold}
                      </WinnerViewScoreListText>
                    </WinnerViewScoreListRightView>
                  </WinnerViewScoreListWrap>
                );
              }
            })}
          </WinnerViewScoreListView>
        </WinnerViewBotView>
        <WinnerViewControlls orientation={orientation}>
          <WinnerViewButtonView>
            <Button
              bgc={clPrimary}
              txc={clWhite}
              title={"New Game"}
              action={() => {
                stopTheGame();
              }}
            />
          </WinnerViewButtonView>
        </WinnerViewControlls>
      </WinnerViewView>
    </WinnerViewComponent>
  );
};
export default WinnerView;
