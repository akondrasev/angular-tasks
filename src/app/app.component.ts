import { Component } from '@angular/core';
import { BackendService } from './service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private service: any;
  data: any;

  constructor(backend: BackendService) {
    this.service = backend;
    this.data = this.service.fetchData();
  }

  logValue(value:any) {
    alert(value);
  }

  multiplyBy(value:any, factor:any){
    return value * factor;
  }
}
