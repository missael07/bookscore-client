import { Games } from "../interfaces/games-list.response"
import { PlayerResponse } from "../interfaces/players-create.response";

export const setGameData = async (state: any, data: Games) => {
    state.commit('setGameData', data);
}

export const setPlayers = async (state: any, data: PlayerResponse[]) => {
    state.commit('setPlayers', data);
}
