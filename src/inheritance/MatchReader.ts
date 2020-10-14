import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { dateStringToDate } from '../utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    const [
      date,
      homeTeam,
      awayTeam,
      homeGoals,
      awayGoals,
      winner,
      refferee
    ] = row;

    return [
      dateStringToDate(date),
      homeTeam,
      awayTeam,
      parseInt(homeGoals),
      parseInt(awayGoals),
      winner as MatchResult,
      refferee
    ];
  }
}
