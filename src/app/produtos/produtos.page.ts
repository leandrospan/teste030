import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BancodedadosService } from '../bancodedados.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produto = {
    codigo: 0,
    nome: '',
    ingredientes: '',
    imagem: '',
    quantidade: 0,
    preco: 0,
    subtotal: 0
  };

  constructor(
    private recebendo: ActivatedRoute,
    public bd: BancodedadosService
  ) { }

  ngOnInit() {
    this.recebendo.paramMap.subscribe(p => {
      const i = (Number(p.get('codigo')) - 1);
      this.produto = {
        codigo: this.bd.produtos[i].codigo,
        nome: this.bd.produtos[i].nome,
        ingredientes: this.bd.produtos[i].ingredientes,
        imagem: this.bd.produtos[i].imagem,
        quantidade: this.bd.produtos[i].quantidade,
        preco: this.bd.produtos[i].preco,
        subtotal: this.bd.produtos[i].subtotal
      };
    });
  }

}
