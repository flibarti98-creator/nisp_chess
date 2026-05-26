// Klasa reprezentująca wieżę
class Rook {
    constructor() {
        this.type = "ROOK";
    }

    validateMove(move) {
        // Wieża porusza się tylko po tej samej kolumnie lub tym samym wierszu
        if (move.sourceX === move.destinationX && move.sourceY !== move.destinationY) {
            return true; // Ruch w pionie
        }
        if (move.sourceY === move.destinationY && move.sourceX !== move.destinationX) {
            return true; // Ruch w poziomie
        }
        return false;
    }
}