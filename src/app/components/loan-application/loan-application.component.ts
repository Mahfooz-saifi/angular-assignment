import { Component, inject } from '@angular/core';
import { ClintService } from '../../services/clint.service';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { LoanappService } from '../../services/loanapp.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [TableModule, CardModule, ChartModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent {

  _loanApp = inject(LoanappService)
  data: any;
  loanData: any;
  ngOnInit(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Expenses',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

this._loanApp.loanData().subscribe((res)=>{

  this.loanData = res
})
  }
}
