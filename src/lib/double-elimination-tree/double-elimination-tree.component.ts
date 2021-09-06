import {Component, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';
import {AdnRound, AdnTournament} from '../declarations/interfaces';

@Component({
  selector: 'adn-double-elimination-tree',
  templateUrl: './double-elimination-tree.component.html',
  styleUrls: ['./double-elimination-tree.component.scss']
})
export class DoubleEliminationTreeComponent implements OnChanges {
  @Input()
  matchTemplate!: TemplateRef<any>;
  @Input()
  tournament!: AdnTournament;

  public losersBracket!: AdnRound[];
  public winnersBracket!: AdnRound[];
  //@ts-ignore
  public final: AdnRound;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.losersBracket = this.tournament.rounds.filter(round => {
      return round.type === 'Loserbracket';
    });
    this.winnersBracket = this.tournament.rounds.filter(round => {
      return round.type === 'Winnerbracket';
    });
      //@ts-ignore
    this.final = this.tournament.rounds.filter(round => {
      return round.type === 'Final';
    }).shift();
  }

}
