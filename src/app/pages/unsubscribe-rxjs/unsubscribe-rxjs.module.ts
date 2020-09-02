
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocComponent } from './componentes/poc/poc.component';
import { PocUnsubComponent } from './componentes/poc-unsub/poc-unsub.component';
import { PocTakeComponent } from './componentes/poc-take/poc-take.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until/poc-take-until.component';
import { PocAsyncComponent } from './componentes/poc-async/poc-async.component';

@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribePocComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent
  ]
})
export class UnsubscribeRxjsModule {}
