import { Games } from '../interfaces/games-list.response';
import { PlayerResponse } from '../interfaces/players-create.response';
export const setGameData = (state: any, game: Games) => {
    state.game = game;
}

export const setPlayers = (state: any, players: PlayerResponse[]) => {
    state.players = players;
}