import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightMissing',
})
export class HighlightMissingPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
