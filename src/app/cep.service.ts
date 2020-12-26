import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cep } from './Cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:HttpClient) {}

    buscar(cep:string){
      return new Promise((resolve, reject) => {
     this.http.get(`https://viacep.com.br/ws/${cep}/json/`)

      .subscribe((result:any) => {
        resolve : this.recuperarDados(result)
      },
      (Error) => {
        reject(Error.json());
      })
    })
  }

  recuperarDados(cepRes):Cep{
    let cep = new Cep();
    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.complemento = cepRes.complemento;
    cep.bairro = cepRes.bairro;
    cep.localidade = cepRes.cidade;
    cep.uf = cep.uf;
    return cep;
  }
}
