import { Component, OnInit } from '@angular/core';
import { Cep } from '../Cep';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  constructor(private cepService:CepService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.cepService.buscar(this.cep.cep)
    .then((cep:Cep) => this.cep = cep)
    .catch((cep:Cep) => {
      alert('Não foi possível buscar o cep!')
    })
  }

}
