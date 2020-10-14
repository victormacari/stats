import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      const [
        date,
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        winner,
        refferee
      ] = match;
      if (
        (homeTeam === this.team && winner === MatchResult.HomeWin) ||
        (awayTeam === this.team && winner === MatchResult.AwayWin)
      ) {
        wins += 1;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
