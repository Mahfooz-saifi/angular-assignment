import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items: any[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        items: [
          {label: 'Client', icon: 'pi pi-fw pi-users', routerLink: ['/client']},
          {label: 'Loan Application', icon: 'pi pi-fw pi-building-columns', routerLink: ['/loan-app']},
          {label: 'SOP', icon: 'pi pi-fw pi-cart-plus', routerLink: ['/sop']}
        ]
      },
    ];
  }
}
