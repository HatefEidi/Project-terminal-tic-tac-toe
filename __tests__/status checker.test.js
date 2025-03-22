import { isGameOver } from "../status-checker";

describe("To check if the game is over", () => {
    it("should return true if the game is over", () => {
        const board = [
            ['X', 'X', 'O'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
        expect(isGameOver(board)).toBe(true);
    });
    it("should return false if the game is not over", () => {
        const board = [
            ['X', 'X', 'O'],
            ['_', 'X', '_'],
            ['O', 'O', '_']
        ];
        expect(isGameOver(board)).toBe(false);
    }
    );

    it("should return false if the game is not over", () => {
        const board = [
            ['X', 'X', 'O'],
            ['_', 'X', '_'],
            ['O', 'O', '_']
        ];
        expect(isGameOver(board)).toBe(false);
    }
    );
    it("should return false if the game is not over", () => {
        const board = [
            ['O', 'X', 'O'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
        expect(isGameOver(board)).toBe(false);
    }
    );
});

