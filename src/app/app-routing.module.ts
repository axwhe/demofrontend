import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { SearchCustomersComponent } from './components/search-customers/search-customers.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customer', component: CustomerListComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'findbyage', component: SearchCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
