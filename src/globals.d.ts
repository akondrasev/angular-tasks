import {NgModuleRef} from "@angular/core";
import {AppModule} from "./app/app.module";

declare global {
  var ngRef: NgModuleRef<AppModule>;
}
