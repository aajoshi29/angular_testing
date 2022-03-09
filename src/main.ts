
// all import will be transpiled using 'moduleresolution:node from tsconfig.json'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Load and instantiate the AppModule, this is NgModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
