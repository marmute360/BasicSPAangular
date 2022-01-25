import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})

export class ListaProdutoComponent implements OnInit {
  
  constructor(private produtoService: ProdutoService) { }

  public produto!: Produto[]

ngOnInit(): void {
  this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produto = produtos
        console.log(produtos);
      }
    )
}

}
