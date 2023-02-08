import { ExtratoComponent } from './extrato/extrato.component';
import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NovaTransferenciaComponent } from './new treansfer/nova-transferencia.component';

export const routes: Routes =[
  {path: '', redirectTo: 'extrato', pathMatch: 'full'},
  {path: 'extrato', component:ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
