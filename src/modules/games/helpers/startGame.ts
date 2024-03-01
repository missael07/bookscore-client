import gamesApi from "../api/gamesApi"
import { Player } from "../interfaces/players"
import { PlayersToSend } from "../interfaces/players-to-send";


export const startedGame = async (players: PlayersToSend) => {
    const { data } = await gamesApi.post('/players', players)

    return data;
}