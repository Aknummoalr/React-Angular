// src/main.webcomponent.ts
import { defineCustomElements } from './app/element.bootstrap';

defineCustomElements().catch(err => console.error(err));
