export const horizontalCheck = (nextTurnPlayer: Array<number>, thisTurnPlayer?: Array<number>) => {
    // horizontal check 
    if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(1) && !thisTurnPlayer?.includes(2)) {
        return 2;
    } else if (nextTurnPlayer.includes(3) && nextTurnPlayer.includes(4) && !thisTurnPlayer?.includes(5)) {
        return 5;
    } else if (nextTurnPlayer.includes(6) && nextTurnPlayer.includes(7) && !thisTurnPlayer?.includes(8)) {
        return 8;
    } else if (nextTurnPlayer.includes(1) && nextTurnPlayer.includes(2) && !thisTurnPlayer?.includes(0)) {
        return 0;
    } else if (nextTurnPlayer.includes(4) && nextTurnPlayer.includes(5) && !thisTurnPlayer?.includes(3)) {
        return 3;
    } else if (nextTurnPlayer.includes(7) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(6)) {
        return 6;
    } else if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(2) && !thisTurnPlayer?.includes(1)) {
        return 1;
    } else if (nextTurnPlayer.includes(3) && nextTurnPlayer.includes(5) && !thisTurnPlayer?.includes(4)) {
        return 4;
    } else if (nextTurnPlayer.includes(6) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(7)) {
        return 7;
    };
};

export const verticalCheck = (nextTurnPlayer: Array<number>, thisTurnPlayer?: Array<number>) => {
    if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(3) && !thisTurnPlayer?.includes(6)) {
        return 6;
    } else if (nextTurnPlayer.includes(1) && nextTurnPlayer.includes(4) && !thisTurnPlayer?.includes(7)) {
        return 7;
    } else if (nextTurnPlayer.includes(2) && nextTurnPlayer.includes(5) && !thisTurnPlayer?.includes(8)) {
        return 8;
    } else if (nextTurnPlayer.includes(3) && nextTurnPlayer.includes(6) && !thisTurnPlayer?.includes(0)) {
        return 0;
    } else if (nextTurnPlayer.includes(4) && nextTurnPlayer.includes(7) && !thisTurnPlayer?.includes(1)) {
        return 1;
    } else if (nextTurnPlayer.includes(5) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(2)) {
        return 2;
    } else if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(6) && !thisTurnPlayer?.includes(3)) {
        return 3;
    } else if (nextTurnPlayer.includes(1) && nextTurnPlayer.includes(7) && !thisTurnPlayer?.includes(4)) {
        return 4;
    } else if (nextTurnPlayer.includes(2) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(5)) {
        return 5;
    };
};

export const diagonalCheck = (nextTurnPlayer: Array<number>, thisTurnPlayer?: Array<number>) => {
    if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(4) && !thisTurnPlayer?.includes(8)) {
        return 8;
    } else if (nextTurnPlayer.includes(4) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(0)) {
        return 0;
    } else if (nextTurnPlayer.includes(2) && nextTurnPlayer.includes(4) && !thisTurnPlayer?.includes(6)) {
        return 6;
    } else if (nextTurnPlayer.includes(4) && nextTurnPlayer.includes(6) && !thisTurnPlayer?.includes(2)) {
        return 2;
    } else if (nextTurnPlayer.includes(0) && nextTurnPlayer.includes(8) && !thisTurnPlayer?.includes(4)) {
        return 4;
    } else if (nextTurnPlayer.includes(2) && nextTurnPlayer.includes(6) && !thisTurnPlayer?.includes(4)) {
        return 4;
    };
};

export const randomTurn = (player1: Array<number>, player2: Array<number>) => {
    console.log("working")
    if (!player1.includes(0) && !player2.includes(0)) {
        return 0;
    } else if (!player1.includes(1) && !player2.includes(1)) {
        return 1;
    } else if (!player1.includes(2) && !player2.includes(2)) {
        return 2;
    } else if (!player1.includes(3) && !player2.includes(3)) {
        return 3;
    } else if (!player1.includes(4) && !player2.includes(4)) {
        return 4;
    } else if (!player1.includes(5) && !player2.includes(5)) {
        return 5;
    } else if (!player1.includes(6) && !player2.includes(6)) {
        return 6;
    } else if (!player1.includes(7) && !player2.includes(7)) {
        return 7;
    } else if (!player1.includes(8) && !player2.includes(8)) {
        return 8;
    };
};