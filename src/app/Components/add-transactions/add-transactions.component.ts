import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionModel } from '../../Models/TransactionModels';
import { Console } from 'console';
import { TransactionServicesService } from '../../Services/transaction-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-transactions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-transactions.component.html',
  styleUrl: './add-transactions.component.css'
})
export class AddTransactionsComponent {


transaction:TransactionModel;
transactionType?:string;
amount?:number;
description?:string;
  /**
   *
   */
  constructor(private service:TransactionServicesService,private route:Router) {
    this.transaction={
      id:"",
      date: new Date,
      description:"",
      debit:0,
      credit:0,
      runningBalance:0

    }
    
  }

  onChange($event: Event) {
    console.log(this.transactionType)
    }

  onSubmit(event:any){
    debugger
    if(this.transactionType=='Credit'){
      this.transaction.credit=this.amount;
      this.transaction.description=this.description;
      this.transaction.debit=0;
      this.transaction.runningBalance=0;
    }
    else{
      this.transaction.debit=this.amount;
      this.transaction.description=this.description;
      this.transaction.credit=0;
      this.transaction.runningBalance=0;
    }

    this.service.CreateTransaction(this.transaction).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/']);
    }
      );
    console.log(this.amount);
    console.log(this.description);
    console.log(this.transactionType);
  }
}
