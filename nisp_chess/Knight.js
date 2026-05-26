// Klasa reprezentująca skoczka / konika
class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Ruch w kształcie litery L: (2,1) lub (1,2)
        if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
            return true;
        }
        return false;
    }
}