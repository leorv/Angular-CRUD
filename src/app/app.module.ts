import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';

import { AlunosService } from './alunos.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        AlunosComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        HttpClientModule,
        AlunosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
