import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, appConfig, context);

export default bootstrap;