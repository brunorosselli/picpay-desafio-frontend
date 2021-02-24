import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TransactionPayload } from '../interfaces/transaction-payload';


@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient ) { }

  enviarPagamento(transactionPayload: TransactionPayload){
    return this.http.post(environment.pagamentoApiUrl, transactionPayload, {responseType: 'text' as 'json'});
  }
}
