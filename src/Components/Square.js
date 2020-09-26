import React from 'react';

const button = {
    background: '#95D8EB',
    border: '1px dark blue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
}

export default function Square({ value, onClick }) {
    return (
        <>
            <button style={button} onClick={onClick}>{value}</button>
        </>
    )
}