import gamesApi from '../api/gamesApi';
import type { Games } from '../interfaces/games-list.response';

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