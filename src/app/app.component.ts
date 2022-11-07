import { Component, OnInit } from '@angular/core';
import { mergeMap, of, Subject } from "rxjs";
import { Printer } from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tasks';
  private removePrinterSubject = new Subject<Printer>();

  ngOnInit(): void {

    this.removePrinterSubject.asObservable()
      .pipe(
        mergeMap((printer) => {
          if (printer.Status === "ONLINE") {
          }

          return of(null);
        })
      )
  }


}
