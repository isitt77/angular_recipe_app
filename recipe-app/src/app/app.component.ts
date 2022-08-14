import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedSelection: string = '';

  onNavigate(selection: string) {
    this.loadedSelection = selection;
  }

}
