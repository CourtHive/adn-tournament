import {NgModule} from '@angular/core';
import {AdnDoubleEliminationTreeModule} from './double-elimination-tree/adn-double-elimination-tree.module';
import {AdnSingleEliminationTreeModule} from './single-elimination-tree/adn-single-elimination-tree.module';

const modules = [AdnSingleEliminationTreeModule, AdnDoubleEliminationTreeModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: [AdnSingleEliminationTreeModule, AdnDoubleEliminationTreeModule]
})
export class AdnTournamentTreeModule {
}
