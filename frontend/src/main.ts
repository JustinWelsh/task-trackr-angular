import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// Forms modules
// Http modules
// etc...


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
