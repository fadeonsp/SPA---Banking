import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

// componentes
import { HeaderComponent } from './app/header/header.component';
import { ContentComponent } from './app/content/content.component';
import { FooterComponent } from './app/footer/footer.component';
import { CadastroClientesComponent } from './app/cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from './app/home-logada/home-logada.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
