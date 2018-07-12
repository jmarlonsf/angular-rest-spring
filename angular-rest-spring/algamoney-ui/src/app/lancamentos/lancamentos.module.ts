import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ButtonModule } from 'primeng/components/button/button';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // primeng
    ButtonModule,
    CalendarModule,
    DataTableModule,
    DropdownModule,
    InputMaskModule,
    InputTextareaModule,
    InputTextModule,
    SelectButtonModule,
    TooltipModule,
    // ng2
    CurrencyMaskModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
