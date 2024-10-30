import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Aseguramos que AppModule esté correctamente bootstrapped
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
