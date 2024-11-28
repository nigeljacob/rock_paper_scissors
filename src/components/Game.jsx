import React, { useEffect, useState } from 'react'

const Game = () => {

    // Get the player's move from the buttons

    // Get the computer's move randomly

    // Compare the moves and determine the winner

    // Update the scores

    // Display the winner
    // Restart the game

    const choices = ['rock', 'paper', 'scissors'];

    const [playerChoice, setPlayerChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [winner, setWinner] = useState(null);

    // get the player's move
    const playMove = (playerChoice) => {
        setPlayerChoice('');
        setComputerChoice('');
        setWinner(null);
        setPlayerChoice(playerChoice);
        computerMove();
    };

    // get the computer's move
    const computerMove = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        console.log('randomIndex', randomIndex);
        setComputerChoice(choices[randomIndex]);
    }

    // Get the winner
    const determineWinner = () => {
        if (playerChoice === computerChoice) {
            setWinner("It's a tie");
        } else if
            ((playerChoice === 'rock' && computerChoice === 'scissor') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissor' && computerChoice === 'paper')) {
            setWinner('Player');
        } else {
            setWinner('Computer');
        }
    }

    useEffect(() => {
        if (playerChoice !== "" && computerChoice !== "") {
            determineWinner();
            console.log('playerChoice', playerChoice);
            console.log('computerChoice', computerChoice);
        }
    }, [computerChoice])




    return (
        <div className='container mx-auto  items-center mt-10 w-full'>
            <div className='text-4xl font-bold font-serif text-blue-600 bg-gray-100 py-[20px] rounded-[10px]'> Rock - Paper - Scissor</div>

            <div className='flex items-center justify-center gap-[100px] w-[50vw] mx-auto mt-[20px]'>
                <div className='p-4 border-2 rounded-[20px] w-48'>
                    <h2 className='items-center text-3xl'> Player </h2>
                    <p> 0 </p>
                </div>
                <div className='p-4 border-2 rounded-[20px] w-48'>
                    <h2 className='items-center text-3xl'> Computer </h2>
                    <p> 1 </p>
                </div>
            </div>


            <div className='mt-8'>
                <div className='mb-8 font-bold'>Choose Your Move:</div>

                <div className='flex justify-center space-x-4'>
                    <button onClick={() => playMove('rock')} className='px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-700 rounded-lg'>
                        Rock
                    </button>
                    <button onClick={() => playMove('paper')} className='px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-700 rounded-lg'>
                        Paper
                    </button>
                    <button onClick={() => playMove('scissors')} className='px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-700 rounded-lg'>
                        Scissors
                    </button>
                </div>
            </div>

            <div className=' mt-8'>
                <div className='mb-8 font-bold'>Computer's Move:</div>
                {computerChoice !== "" ? (
                    <div className='px-6 py-3 bg-blue-500 text-white mt-8 font-medium rounded-lg w-fit m-auto'>
                        {computerChoice}
                    </div>
                ) : (
                    <div>thinking</div>
                )}

                {winner !== null && (
                    <div className='px-6 py-3 text-blue-700 mt-8 font-medium border border-blue-700 rounded-lg w-fit m-auto'>
                        Result: {winner}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Game
