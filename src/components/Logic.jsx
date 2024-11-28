import React, { useState } from "react";


const Logic = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [result, setResult] = useState("");
  const MAX_MOVES = 10;

  const computerOptions = ["rock", "paper", "scissors"];

  const playMove = (playerChoice) => {
    if (moves >= MAX_MOVES) return;

    const computerChoice =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    determineWinner(playerChoice, computerChoice);
    setMoves(moves + 1);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      setResult("Player Won!");
    } else {
      setComputerScore(computerScore + 1);
      setResult("Computer Won!");
    }
  };

  const restartGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setMoves(0);
    setResult("");
  };

  return (
    <section className="game">
      <div className="title">Rock Paper Scissor</div>
      <div className="score">
        <div className="playerScore">
          <h2>Player</h2>
          <p className="p-count count">{playerScore}</p>
        </div>
        <div className="computerScore">
          <h2>Computer</h2>
          <p className="c-count count">{computerScore}</p>
        </div>
      </div>
      <div className="move">
        {moves < MAX_MOVES ? "Choose your move" : "Game Over!"}
      </div>
      <div className="movesleft">Moves Left: {MAX_MOVES - moves}</div>
      <div className="options">
        <button onClick={() => playMove("rock")} className="rock">
          Rock
        </button>
        <button onClick={() => playMove("paper")} className="paper">
          Paper
        </button>
        <button onClick={() => playMove("scissors")} className="scissor">
          Scissors
        </button>
      </div>
      <div className="result">{result}</div>
      {moves >= MAX_MOVES && (
        <button onClick={restartGame} className="reload">
          Restart
        </button>
      )}
    </section>
  );
};

export default Logic;
