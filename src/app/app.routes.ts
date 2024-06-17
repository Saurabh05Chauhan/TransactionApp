import { Routes } from '@angular/router';
import { AddTransactionsComponent } from './Components/add-transactions/add-transactions.component';
import { TransactionHomeComponent } from './Components/transaction-home/transaction-home.component';

export const routes: Routes = [
    {
        path:'add',component:AddTransactionsComponent
        
    },{
        path:'',component:TransactionHomeComponent
    }
];
