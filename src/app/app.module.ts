import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';

import { MatChipsModule } from '@angular/material/chips';
import {  MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionPayload } from './interfaces/transaction-payload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule

  ],
  providers: [TransactionPayload],
  bootstrap: [AppComponent]
})
export class AppModule { }
