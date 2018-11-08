import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-avatar',
  templateUrl: './my-avatar.component.html',
  styleUrls: ['./my-avatar.component.css']
})
export class MyAvatarComponent {
  title = 'prueba';
  @Input() url: string;
}
