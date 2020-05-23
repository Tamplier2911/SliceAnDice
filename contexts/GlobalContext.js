import React, { useState, createContext } from "react";

const Context = createContext({});

export const GlobalStore = ({ children }) => {
  const [appGlobalState, setAppGlobalState] = useState({
    players: 0,
    totalPlayers: 0,
    currentPlayer: 0,
    currentRoll: 0,
    playersModal: false,
    game: false,
    winner: null,
    score: {},
  });
  const {
    players,
    totalPlayers,
    currentPlayer,
    currentRoll,
    playersModal,
    game,
    winner,
    score,
  } = appGlobalState;

  /**
   * Global Context manipulation method - opens modal with "choose players" menu.
   * @function openPlayersModal
   */

  const openPlayersModal = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      playersModal: true,
    }));
  };

  /**
   * Global Context manipulation method - closes modal with "choose players" menu.
   * @function closePlayersModal
   */

  const closePlayersModal = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      playersModal: false,
    }));
  };

  /**
   * Global Context manipulation method - initialzies game state to start,
   * with 2 total players, where current player is 1, initializes 3 player
   * objects in score.
   * @function setPlayersTwo
   */

  const setPlayersTwo = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      players: 2,
      totalPlayers: 2,
      currentPlayer: 1,
      game: true,
      score: {
        1: {
          current: 0,
          hold: 0,
        },
        2: {
          current: 0,
          hold: 0,
        },
      },
    }));
  };

  /**
   * Global Context manipulation method - initialzies game state to start,
   * with 3 total players, where current player is 1, initializes 3 player
   * objects in score.
   * @function setPlayersThree
   */

  const setPlayersThree = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      players: 3,
      totalPlayers: 3,
      currentPlayer: 1,
      game: true,
      score: {
        1: {
          current: 0,
          hold: 0,
        },
        2: {
          current: 0,
          hold: 0,
        },
        3: {
          current: 0,
          hold: 0,
        },
      },
    }));
  };

  /**
   * Global Context manipulation method - initialzies game state to start,
   * with 4 total players, where current player is 1, initializes 4 player
   * objects in score.
   * @function setPlayersFour
   */

  const setPlayersFour = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      players: 4,
      totalPlayers: 4,
      currentPlayer: 1,
      game: true,
      score: {
        1: {
          current: 0,
          hold: 0,
        },
        2: {
          current: 0,
          hold: 0,
        },
        3: {
          current: 0,
          hold: 0,
        },
        4: {
          current: 0,
          hold: 0,
        },
      },
    }));
  };

  /**
   * Global Context manipulation method - initialzies game state to start,
   * with 5 total players, where current player is 1, initializes 5 player
   * objects in score.
   * @function setPlayersFive
   */

  const setPlayersFive = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      players: 5,
      totalPlayers: 5,
      currentPlayer: 1,
      game: true,
      score: {
        1: {
          current: 0,
          hold: 0,
        },
        2: {
          current: 0,
          hold: 0,
        },
        3: {
          current: 0,
          hold: 0,
        },
        4: {
          current: 0,
          hold: 0,
        },
        5: {
          current: 0,
          hold: 0,
        },
      },
    }));
  };

  /**
   * Global Context manipulation method - holds current player score by adding it to
   * hold property of current player object. Checks if player win the game.
   * Player considerd as winner is holded score is greater or equal to 100.
   * @function holdCurrentScore
   * @param {number} currentScore - current score from players object.
   * @param {currentPlayer} currentPlayer - current player that performs hold.
   */

  const holdCurrentScore = (currentScore, currentPlayer) => {
    setAppGlobalState((appGlobalState) => {
      const { score } = appGlobalState;
      score[currentPlayer].hold += currentScore;
      score[currentPlayer].current = 0;
      const playerWon = score[currentPlayer].hold >= 100 ? currentPlayer : null;
      return { ...appGlobalState, score, currentRoll: 1, winner: playerWon };
    });
  };

  /**
   * Global Context manipulation method - rolls the dice in range of 1-6.
   * If player rolled 1, player loses all current score from its object.
   * If player rolled 2-6, score is added to score object.
   * Roll value is stored in state, if roll value === 1 we want to swtich player.
   * @function rollDice
   * @param {currentPlayer} currentPlayer - current player that performs rolling.
   */

  const rollDice = (currentPlayer) => {
    const rollValue = Math.floor(Math.random() * 6 + 1);
    if (rollValue === 1) {
      setAppGlobalState((appGlobalState) => {
        const { score } = appGlobalState;
        score[currentPlayer].current = 0;
        return { ...appGlobalState, score, currentRoll: rollValue };
      });
    } else {
      setAppGlobalState((appGlobalState) => {
        const { score } = appGlobalState;
        score[currentPlayer].current += rollValue;
        return { ...appGlobalState, score, currentRoll: rollValue };
      });
    }
  };

  /**
   * Global Context manipulation method - switches player to next,
   * if roll value === 1, also drops roll dumps roll value to 0, before
   * next player encountered game.
   * @function nextPlayer
   */

  const nextPlayer = () => {
    const { currentPlayer, totalPlayers } = appGlobalState;
    const newPlayer = currentPlayer + 1 > totalPlayers ? 1 : currentPlayer + 1;

    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      currentPlayer: newPlayer,
      currentRoll: 0,
    }));
  };

  /**
   * Global Context manipulation method - basically reinitialization of the game.
   * @function nextPlayer
   */

  const stopTheGame = () => {
    setAppGlobalState((appGlobalState) => ({
      ...appGlobalState,
      players: 0,
      totalPlayers: 0,
      currentPlayer: 0,
      currentRoll: 0,
      winner: null,
      game: false,
      score: {},
    }));
  };

  return (
    <Context.Provider
      value={{
        players,
        totalPlayers,
        currentPlayer,
        currentRoll,
        playersModal,
        winner,
        game,
        score,
        openPlayersModal,
        closePlayersModal,
        setPlayersTwo,
        setPlayersThree,
        setPlayersFour,
        setPlayersFive,
        holdCurrentScore,
        rollDice,
        nextPlayer,
        stopTheGame,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
