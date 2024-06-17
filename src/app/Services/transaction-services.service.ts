import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionModel } from '../Models/TransactionModels';

@Injectable({
  providedIn: 'root'
})
export class TransactionServicesService {

  constructor(private http:HttpClient) { }

  getTransaction():Observable<TransactionModel[]>{

    return this.http.get<TransactionModel[]>('http://localhost:5264/api/Transaction');
  }

  CreateTransaction(model:TransactionModel):Observable<TransactionModel>{

    return this.http.post<TransactionModel>('http://localhost:5264/api/Transaction',model);
  }
}
