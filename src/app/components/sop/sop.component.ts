import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ClintService } from '../../services/clint.service';
import { SopService } from '../../services/sop.service';

@Component({
  selector: 'app-sop',
  standalone: true,
  imports: [TableModule, CardModule],
  templateUrl: './sop.component.html',
  styleUrl: './sop.component.scss'
})
export class SopComponent {
  _sop = inject(SopService)
  sopData: any;
ngOnInit(): void {
  this._sop.sopData().subscribe((res:any)=>{
    this.sopData = res;
  })
}
}
