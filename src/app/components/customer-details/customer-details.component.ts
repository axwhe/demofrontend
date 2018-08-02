import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private customerService: CustomerService, private customerListComponent: CustomerListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean){
    this.customerService.updateCustomer(this.customer.id,{name: this.customer.name, age: this.customer.age, active: isActive}).subscribe
    (
      data => {
         console.log(data);
         this.customer = data as Customer;
      },
      error => console.log(error)
    );
  }

  deleteCustomer(){
    this.customerService.deleteCustomer(this.customer.id).subscribe
    (
      data => {
        console.log(data);
        this.customerListComponent.reloadData();
      },
      error => {
        console.log(error)
      }
    );
  }
}
