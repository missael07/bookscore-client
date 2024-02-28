export interface Games {
    _id?:        string;
    gameNumber: number;
    vsTeam:     string;
    runsOut:    number;
    runsIn:     number;
    isWon:      boolean;
    dateGame:   Date;
}
