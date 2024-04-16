import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-message',
  standalone: false,
  template: `
    <div class="message" [ngClass]="{'success': type==='success', 'error': type === 'error'}">
      {{content}}
    </div>
  `,
  styles: []
})
export class NgxMessageComponent {
  @Input() type!: 'success' | 'error';
  @Input() content!: string;
}