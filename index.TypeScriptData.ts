import {bootstrapApplication} from '@angular/platform-browser';
import { appConfig } from '.app/app.config';
import {appComponent} from '.app/app.component';

bootstrapApplication(appComponent ,appConfig)
.catch((err)=> console.log(err));
 