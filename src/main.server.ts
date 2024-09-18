import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { appComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(appComponent, config);

export default bootstrap;
