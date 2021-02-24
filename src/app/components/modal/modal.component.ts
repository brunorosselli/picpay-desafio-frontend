import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionPayload } from '../../interfaces/transaction-payload';
import { PagamentoService } from '../../services/pagamento.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

   cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  exDate: any;
  ccvCartao: any;
  nCartao: any;
  selecionaCartao: any;
  usuario: any;

  // tslint:disable-next-line: no-input-rename
  @Input('usuarioDestino') usuarioDestino: any;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private transactionPayload: TransactionPayload,
    private pagamentoService: PagamentoService
    ) {}

  ngOnInit(): void {
  }


  pagar(){
    console.log('Número cartão:', this.selecionaCartao);
    this.cards.forEach((itemCard) => {
    if (this.selecionaCartao == itemCard.card_number){
      this.nCartao = itemCard.card_number;
      this.ccvCartao = itemCard.cvv;
      this.exDate = itemCard.expiry_date;

    }});
    this.transactionPayload.card_number = this.nCartao;
    this.transactionPayload.cvv = this.ccvCartao;
    this.transactionPayload.expiry_date = this.exDate;
    this.transactionPayload.destination_user_id = this.usuarioDestino;
    
    this.pagamentoService.enviarPagamento(this.transactionPayload).subscribe((resultado) => {
        
        console.log('Cartão Value: ', this.transactionPayload.card_number);
        console.log('Cartão ccv: ', this.transactionPayload.cvv);
        console.log('Cartão Date: ', this.transactionPayload.expiry_date);
        console.log('Usuário Destino: ', this.transactionPayload.destination_user_id);

        console.log('Resultado: ', resultado);

        alert("Pagamento Feito com Sucesso!");
         }
    ); }
  }

