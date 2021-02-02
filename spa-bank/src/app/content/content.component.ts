import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //constante de configuração
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Banco Angular baixo Juros', 'Peça a portabilidade e venha ser Banco Angular hoje mesmo', 'Inovavor digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };
   const typed = new Typed('.typing-element', options);
  }


}
