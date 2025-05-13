
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app.config.server';

export async function defineCustomElements() {
  const appRef = await bootstrapApplication(AppComponent, config);
  const injector = appRef.injector;
  const el = createCustomElement(AppComponent, { injector });
  customElements.define('app-root', el); // <AngularComponent> custom element

    // Prevent re-definition on reloads
  if (!customElements.get('app-root')) {
    customElements.define('app-root', el);
  }
}
