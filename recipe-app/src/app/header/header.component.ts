import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();

  onSelect(option: string) {
    console.log(option);
    this.optionSelected.emit(option);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
