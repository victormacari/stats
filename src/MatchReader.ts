import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
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
    );
  }
}
