import {Component, inject, OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { bootstrapApplication} from '@angular/platform-browser';
import { provideHttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1> Mensagens de API </h1>
    <ul>
      <li *ngFor="let m of mensagens"> {{ m.texto }} </li>
  `,

})
export class AppComponent implements OnInit {
  mensagens: any [] = [];
  http = inject (HttpClient);

  ngOnInit()
  {
    this.http.get<any[]>('https://orange-space-succotash-jjr7v9vr4vxph575w-8000.app.github.dev/api/mensagens')
    .subscribe(data => this.mensagens = data);
  }
}
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
});