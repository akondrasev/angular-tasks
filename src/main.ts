import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((_ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window.ngRef) {
      window.ngRef.destroy();
    }
    window.ngRef = _ref;
  })
  .catch((err) => {
    if (window.ngRef) {
      window.ngRef.destroy();
    }
  });
