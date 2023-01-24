export const horizontalCheck = (player: Array<number>) => {
    // horizontal check 
    if (player.includes(0) && player.includes(1)) {
        return 2;
    } else if (player.includes(3) && player.includes(4)) {
        return 5;
    } else if (player.includes(6) && player.includes(7)) {
        return 8;
    } else if (player.includes(1) && player.includes(2)) {
        return 0;
    } else if (player.includes(4) && player.includes(5)) {
        return 3;
    } else if (player.includes(7) && player.includes(8)) {
        return 6;
    } else if (player.includes(0) && player.includes(2)) {
        return 1;
    } else if (player.includes(3) && player.includes(5)) {
        return 4;
    } else if (player.includes(6) && player.includes(8)) {
        return 7;
    };
};

export const verticalCheck = (player: Array<number>) => {
    if (player.includes(0) && player.includes(3)) {
        return 6;
    } else if (player.includes(1) && player.includes(4)) {
        return 7;
    } else if (player.includes(2) && player.includes(5)) {
        return 8;
    } else if (player.includes(3) && player.includes(6)) {
        return 0;
    } else if (player.includes(4) && player.includes(7)) {
        return 1;
    } else if (player.includes(5) && player.includes(8)) {
        return 2;
    } else if (player.includes(0) && player.includes(6)) {
        return 3;
    } else if (player.includes(1) && player.includes(7)) {
        return 4;
    } else if (player.includes(2) && player.includes(8)) {
        return 5;
    };
};

export const diagonalCheck = (player: Array<number>) => {
    if (player.includes(0) && player.includes(4)) {
        return 8;
    } else if (player.includes(4) && player.includes(8)) {
        return 0;
    } else if (player.includes(2) && player.includes(4)) {
        return 6;
    } else if (player.includes(4) && player.includes(6)) {
        return 2;
    } else if (player.includes(0) && player.includes(8)) {
        return 4;
    } else if (player.includes(2) && player.includes(6)) {
        return 4;
    };
};

export const randomTurn = (player: Array<number>) => {
    if (!player.includes(0)) {
        return 0;
    } else if (!player.includes(1)) {
        return 1;
    } else if (!player.includes(1)) {
        return 2;
    } else if (!player.includes(1)) {
        return 3;
    } else if (!player.includes(1)) {
        return 4;
    } else if (!player.includes(1)) {
        return 5;
    } else if (!player.includes(1)) {
        return 6;
    } else if (!player.includes(1)) {
        return 7;
    } else if (!player.includes(1)) {
        return 8;
    }
};