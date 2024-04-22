import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { TabsComponent } from './tabs/tabs.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ButtonComponent, TabsComponent, CommonModule]
})
export class AppComponent  implements OnInit{
  

  tabs: string [] = ['Registered Project', 'Quartely Updates of Project', 'Project Locations', 'Advance Search']
  activatedTabIndex: number = 0;
  constructor(){}
  ngOnInit(): void {
  }
  title = 'rera';
  tabChange(tabIndex: number){
    this.activatedTabIndex= tabIndex;
    
  }
}
