import { Component, inject, OnInit } from '@angular/core';
import { ClintService } from '../../services/clint.service';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [TableModule, CardModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{
_client = inject(ClintService)
  clientData: any;
ngOnInit(): void {
  this._client.clientData().subscribe((res:any)=>{
    this.clientData = res;
  })
}


}
