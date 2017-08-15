import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://loiane.com';
  nomeDoCurso : string = 'Angular';
  valorInicial: number = 15;

  getValor()
  {
    return 1;
  }

  onMudouValor(event)
  {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
