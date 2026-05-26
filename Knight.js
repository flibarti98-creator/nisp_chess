class Knight {
    constructor() {
        this.type = "KNIGHT";
    }

    validateMove(move) {

        const dx = Math.abs(move.to.x - move.from.x);
        const dy = Math.abs(move.to.y - move.from.y);

        if (
            (dx === 2 && dy === 1) ||
            (dx === 1 && dy === 2)
        ) {
            return true;
        }

        return false;
    }
}

const knight = new Knight();

console.log(
    knight.validateMove({
        from: { x: 1, y: 0 },
        to: { x: 2, y: 2 }
    })
);

console.log(
    knight.validateMove({
        from: { x: 1, y: 0 },
        to: { x: 1, y: 3 }
    })
);