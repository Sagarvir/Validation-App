import { Component } from '@angular/core';
import { TranslatorComponent } from './components/translator/translator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslatorComponent],
  template: `<app-translator></app-translator>`
})
export class App {}