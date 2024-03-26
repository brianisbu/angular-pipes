import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = []

    ngOnInit() {
        this.menuItems = [
          {
            label:'pipes de angular',
            icon:'pi pi-desktop',
            items:[
              {
                label:'texto y fecha',
                icon:'pi pi-align-left',
                routerLink:'/'
              },
              
              {
                label:'numeros',
                icon:'pi pi-dollar',
                routerLink:'numbers'
              },

              {
                label:'no comunes',
                icon:'pi pi-globe',
                routerLink:'uncommon'
              },
            ]
          },

          {
            label:'pipes personalizados',
            icon:' pi pi-cog',
            items:[
              {
                label:'otro elemento',
                icon:'pi pi-cog'
              }
            ]
          }
      ];
      }

}
