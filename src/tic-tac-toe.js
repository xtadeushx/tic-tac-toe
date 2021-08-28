// class TicTacToe {
//     constructor() {

//     }

//     getCurrentPlayerSymbol() {

//     }

//     nextTurn(rowIndex, columnIndex) {

//     }

//     isFinished() {

//     }

//     getWinner() {

//     }

//     noMoreTurns() {

//     }

//     isDraw() {

//     }

//     getFieldValue(rowIndex, colIndex) {

//     }
// }

class TicTacToe {
    playerSymbols = ['x', 'o'];

    constructor() {
        this.field3x3 = Array(3)
            .fill()
            .map(() => Array(3).fill(null));

        this.currentSymbol = this.playerSymbols[0];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field3x3[rowIndex][columnIndex] === null) {
            this.field3x3[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.playerSymbols.reverse()[0];
        }
    }

    isFinished() {
        return !!this.getWinner() || this.isDraw();
    }

    getWinner() {
        const fieldLength = this.field3x3.length;

        for (let i = 0; i < fieldLength; i++) {
            const isHorizontalLineHasIdenticalSymbols = (
                (this.field3x3[i][0] === this.field3x3[i][1]) &&
                (this.field3x3[i][1] === this.field3x3[i][2])
            );

            if (isHorizontalLineHasIdenticalSymbols) {
                return this.field3x3[i][0];
            }
        }

        for (let i = 0; i < fieldLength; i++) {
            const isVerticalLineHasIdenticalSymbols = (
                (this.field3x3[0][i] === this.field3x3[1][i]) &&
                (this.field3x3[1][i] === this.field3x3[2][i])
            );

            if (isVerticalLineHasIdenticalSymbols) {
                return this.field3x3[0][i];
            }
        }

        const isFirstDiagonalHasIdenticalSymbols = (
            (this.field3x3[0][0] === this.field3x3[1][1]) &&
            (this.field3x3[1][1] === this.field3x3[2][2])
        );

        if (isFirstDiagonalHasIdenticalSymbols) {
            return this.field3x3[0][0];
        }

        const isSecondDiagonalHasIdenticalSymbols = (
            (this.field3x3[0][2] === this.field3x3[1][1]) &&
            (this.field3x3[1][1] === this.field3x3[2][0])
        );

        if (isSecondDiagonalHasIdenticalSymbols) {
            return this.field3x3[0][2];
        }

        return null;
    }

    noMoreTurns() {
        return this.field3x3.every((item) => {
            return item.indexOf(null) === -1;
        });
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field3x3[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

module.exports = TicTacToe;
