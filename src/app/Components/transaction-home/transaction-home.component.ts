import { Component, OnInit } from '@angular/core';
import { TransactionModel } from '../../Models/TransactionModels';
import { TransactionServicesService } from '../../Services/transaction-services.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-home.component.html',
  styleUrl: './transaction-home.component.css'
})
export class TransactionHomeComponent implements OnInit {

  transaction?:TransactionModel[];
  //transaction$?:Observable<TransactionModel[]>;
  constructor(private service:TransactionServicesService) {
    
  }

  ngOnInit(): void {
    debugger
    this.service.getTransaction().subscribe((res)=>{
      this.transaction=res;
    });
    //console.log(this.transaction$)
      
  }

  

}
