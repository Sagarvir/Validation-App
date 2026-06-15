import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [TranslateModule,CommonModule,FormsModule],  // ✅ IMPORTANT
  templateUrl: './translator.html',
  styleUrls: ['./translator.css']
})
export class TranslatorComponent {

  languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'French' }
];
  selectedLang = 'en';

  // Your paragraph (KEY BASED)
  keys = ['OPEN', 'OFFICE', 'MOUSE', 'KEYPAD', 'HELLO'];

  translations: any = {};
englishTranslations: any = {};

constructor(private translate: TranslateService) {
  this.translate.setDefaultLang('en');
  this.translate.use('en');

  // Load English separately
  this.translate.getTranslation('en').subscribe(res => {
    this.englishTranslations = res;
  });

  // Load selected language
  this.loadTranslations(this.selectedLang);
}

loadTranslations(lang: string) {
  this.translate.getTranslation(lang).subscribe(res => {
    this.translations = res;
  });
}

changeLanguage(lang: string) {
  this.selectedLang = lang;
  this.translate.use(lang);
  this.loadTranslations(lang);
}

getTranslation(key: string): string {
  return this.translations[key] || this.englishTranslations[key] || key;
}

isMissing(key: string): boolean {
  return !this.translations[key];
}
}