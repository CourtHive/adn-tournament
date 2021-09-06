import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {AdnRound, AdnTournament} from '../declarations/interfaces';

@Component({
  selector: 'adn-single-elimination-tree',
  templateUrl: './single-elimination-tree.component.html',
  styleUrls: ['./single-elimination-tree.component.scss']
})
export class SingleEliminationTreeComponent implements OnInit, OnChanges {
  @Input() matchTemplate!: TemplateRef<any>;
  @Input() tournament!: AdnTournament;

  public winnersBracket!: AdnRound[];
    //@ts-ignore
  public final: AdnRound;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('tournament') && changes.tournament.currentValue) {
      this.winnersBracket = this.tournament.rounds.filter(round => {
        return round.type === 'Winnerbracket';
      });
    }
    console.log(this.winnersBracket);
      //@ts-ignore
    this.final = this.tournament.rounds.filter(round => {
      return round.type === 'Final';
    }).shift();
    console.log(this.final);
  }

}
