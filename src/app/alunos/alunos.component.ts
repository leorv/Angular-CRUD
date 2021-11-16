import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
    alunos: Array<any> = new Array();
    aluno: Aluno = new Aluno();

    constructor(
        private alunosService: AlunosService
    ) { }

    ngOnInit(): void {
        this.listarAlunos();
    }

    listarAlunos() {
        this.alunosService.listarAlunos().subscribe(
            alunos => {
                this.alunos = alunos;
            },
            err => {
                console.log('erro ao listar os alunos.', err)
            }
        )
    }

    cadastrar(){
        console.log(this.aluno);
        this.alunosService.cadastrarAluno(this.aluno).subscribe(
            aluno => {
                this.aluno = new Aluno();
                this.listarAlunos();
            },
            err => {
                console.log('Erro ao cadastrar aluno.', err);
            }
        )
    }

    atualizar(id: number){
        this.alunosService.atualizarAluno(id, this.aluno).subscribe(
            aluno => {
                this.aluno = new Aluno();
                this.listarAlunos();
            },
            err => {
                console.log('Erro ao atualizar aluno.', err);
            }
        )
    }

    remover(id: number){
        this.alunosService.removerAluno(id).subscribe(
            aluno => {
                this.aluno = new Aluno();
                this.listarAlunos();
            },
            err => {
                console.log('Erro ao atualizar aluno.', err);
            }
        )

    }

}
