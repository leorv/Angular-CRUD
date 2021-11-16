import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
      private http: HttpClient
  ) { }

  listarAlunos() : Observable<any> {
      return this.http.get("http://localhost:3000/alunos/");
  }
  
  cadastrarAluno(aluno: Aluno) : Observable<any> {
      return this.http.post("http://localhost:3000/alunos/", aluno);
  }

  atualizarAluno(id: number, aluno: Aluno) : Observable<any> {
      return this.http.put("http://localhost:3000/alunos/".concat(id.toString()), aluno);
  }

  removerAluno(id: number) : Observable<any> {
      return this.http.delete("http://localhost:3000/alunos/".concat(id.toString()));
  }
}
