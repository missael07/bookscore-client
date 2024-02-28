import gamesApi from '../api/gamesApi';
import type { Games } from '../interfaces/games-list.response';
import type { StartGame } from '../interfaces/start-game';

export const getGames = async (): Promise<Games[]> => {
      const { data } = await gamesApi.get<Games[]>('/game');

      const games: Games[] = [];

      for (const { vsTeam, gameNumber, isWon, runsIn, runsOut, dateGame, _id  } of data ) {
        
        games.push({
            _id,
            vsTeam,
            gameNumber, 
            isWon, 
            runsIn, 
            runsOut, 
            dateGame
        })
      }

    return games;
}   

export const startGameHelper = async ( dataToSave: StartGame): Promise<Games> => {

  const { data } = await gamesApi.post<Games>('/game', dataToSave);

  const game: Games = {
    _id: data._id,
    vsTeam: data.vsTeam,
    gameNumber : data.gameNumber, 
    isWon : data.isWon, 
    runsIn: data.runsIn, 
    runsOut: data.runsOut, 
    dateGame: data.dateGame
  }

  return game;
}

export const finishGameHelper = async (id: string, dataToSave: any ): Promise<Games> => {

  console.log(dataToSave)
  const { data } = await gamesApi.patch<Games>(`/game/${id}`, dataToSave);

  const game: Games = {
    vsTeam: data.vsTeam,
    gameNumber : data.gameNumber, 
            isWon : data.isWon, 
            runsIn: data.runsIn, 
            runsOut: data.runsOut, 
            dateGame: data.dateGame
  }

  return game;
}