// Klasa reprezentująca królową
class Queen {
    constructor() {
        this.type = "QUEEN";
    }

    validateMove(move) {
        const dx = Math.abs(move.destinationX - move.sourceX);
        const dy = Math.abs(move.destinationY - move.sourceY);

        // Ruch w pionie lub poziomie (jak wieża)
        if (move.sourceX === move.destinationX && dy > 0) return true;
        if (move.sourceY === move.destinationY && dx > 0) return true;

        // Ruch po przekątnej (jak goniec)
        if (dx === dy && dx > 0) return true;

        return false;
    }
}