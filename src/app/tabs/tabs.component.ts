import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {
 @Input () tabsArray: string[] = [];
 @Output() onTabChange = new EventEmitter<number>();
   activatedTab: number = 0;
   activatedTabIndex = 0;
    constructor(){ }
    ngOnInit(): void {
      
    }
    setTab(index:number){
      this.activatedTab= index;
      this.onTabChange.emit(this.activatedTab);
    }
    tabChange(tabIndex: number){
      this.activatedTabIndex= tabIndex;
      
    
}
}

