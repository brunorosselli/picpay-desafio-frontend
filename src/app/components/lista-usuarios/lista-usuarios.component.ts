import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from '../../services/usuarios.service'
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  usuarios: Array<any> = new Array();
  @ViewChild('usuarioDestino') usuarioDestino: ElementRef;

  constructor(private usuariosService: UsuariosService, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  getUsuarios(){
    this.usuariosService.userList().subscribe((resposta) => {
      this.usuarios = resposta;
      console.log(this.usuarios);
    });
  }


  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px',
    });

    dialogRef.componentInstance.usuarioDestino = id;

    console.log('ID:', id);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
