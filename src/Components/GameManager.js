import React, { useState } from 'react';
import { calculateWinner } from '../winner';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
};

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    function handleClick(i) {
        // make shallow copy of board using spread operator
        const copyBoard = [...board];
        // if clicked unoccupied square 
        if (winner || copyBoard[i])
            return;

        // put x or o 
        copyBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(copyBoard);
        setXisNext(!xIsNext)
    }

    function renderMoves() {
        return <button onClick={() => setBoard(Array(9).fill(null))} > Start Over </button>
    }

    return (
        <>
            <div>
                <Board squares={board} onClick={handleClick} />
                <div style={styles}>
                    <h3> {winner ? winner + " WINS!" : 'Next Player : ' + (xIsNext ? 'X' : 'O')}</h3>
                    {renderMoves()}
                </div>
            </div>
        </>
    )
}