class Knight {
    constructor() {
        this.directions = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ]; // All 8 possible moves for a knight
    }

    // Check if the knight is on the board
    isOnBoard(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    // BFS to find the shortest path between start and end
    knightMoves(start, end) {
        const queue = [[start]];  // Queue initialized with the starting position path
        const visited = new Set(); // Set to store visited positions
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();  // Dequeue the first path
            const currentPos = path[path.length - 1];  // Get the last position in the path

            // If the current position is the end, return the path
            if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
                console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
                path.forEach(pos => console.log(pos));
                return path;
            }

            // For each possible knight move, calculate the next position
            for (let direction of this.directions) {
                const nextPos = [currentPos[0] + direction[0], currentPos[1] + direction[1]];

                // If the next position is valid and hasn't been visited
                if (this.isOnBoard(nextPos[0], nextPos[1]) && !visited.has(nextPos.toString())) {
                    visited.add(nextPos.toString());  // Mark the position as visited
                    queue.push([...path, nextPos]);  // Enqueue the new path with the next position
                }
            }
        }
    }
}

// Example Usage:
const knight = new Knight();
knight.knightMoves([3, 3], [4, 3]);  // Start: [3, 3], End: [4, 3]
