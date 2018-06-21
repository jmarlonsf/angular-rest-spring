import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Thiago';
  adicionado = false;
  @Output('criado') funcionarioAdicionado = new EventEmitter;

  adicionar() {
    this.adicionado = true;

    const funcionarios = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionarios);
  }

}
