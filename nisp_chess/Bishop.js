// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Goniec porusza się tylko po przekątnej - różnica X i Y musi być równa
        if (dx === dy && dx > 0) {
            return true;
        }
        return false;
    }
}