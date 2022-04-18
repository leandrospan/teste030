import { Component, OnInit } from '@angular/core';
import { BancodedadosService } from '../bancodedados.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  total = 0;
  subtotal = 0;

  constructor(public bd: BancodedadosService) { }

  public maisLanche(p: number) {
    this.bd.produtos[p - 1].quantidade += 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  public menosLanche(p: number) {
    this.bd.produtos[p - 1].quantidade -= 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  calculaTotal() {
    let t = 0;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < this.bd.produtos.length; i++) {
      t = t + this.bd.produtos[i].subtotal;
    }
   return this.total = t;
  }

  deletar(p: number) {
    this.bd.excluir(p);
    this.calculaTotal();
  }

  ngOnInit() {
  }

}
