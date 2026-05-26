// Klasa reprezentująca gońca
class Bishop {
    constructor() {
        this.type = "BISHOP";
    }

    validateMove(move) {
        
        
         const dx = Math.abs(move.toX - move.fromX);
        const dy = Math.abs(move.toY - move.fromY);

        // Goniec porusza się po przekątnej
        return dx === dy;
    }
}