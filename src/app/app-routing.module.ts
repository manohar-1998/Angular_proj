import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadersComponent } from './component/headers/headers.component';
import { ProductsComponent } from './component/products/products.component';
import {TestfileComponent} from './component/testfile/testfile.component';

const routes: Routes = [
  { path: 'home', component:HeadersComponent},
  { path: 'testfile', component:TestfileComponent},
  { path: 'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
