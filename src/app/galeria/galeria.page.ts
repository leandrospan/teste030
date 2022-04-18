import { Component, OnInit } from '@angular/core';
import { BancodedadosService } from '../bancodedados.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  constructor(public bd: BancodedadosService) { }

  ngOnInit() {
  }

}
