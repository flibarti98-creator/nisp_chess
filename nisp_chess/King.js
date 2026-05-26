// Klasa reprezentująca króla
class King {
    constructor() {
        this.type = "KING";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Król porusza się o dokładnie jedno pole w dowolnym kierunku
        if (dx <= 1 && dy <= 1 && (dx + dy) > 0) {
            return true;
        }
        return false;
    }
}