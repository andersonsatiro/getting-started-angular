import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string,
  sector: string,
  price: number,
  imagePath: string,
  evaluation: number
}

@Component({
  selector: 'app-supermarket-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supermarket-sectors.component.html',
  styleUrl: './supermarket-sectors.component.scss'
})

export class SupermarketSectorsComponent {
  products: Product[] = [
    {
      name: 'Brócolis',
      sector: 'vegetais',
      price: 1.17,
      imagePath: '/images/supermarket-products/brócolis.png',
      evaluation: 4.5
    },

    {
      name: 'Batata',
      sector: 'vegetais',
      price: 7.91,
      imagePath: '/images/supermarket-products/batata.png',
      evaluation: 4
    },

    {
      name: 'Feijão-verde',
      sector: 'vegetais',
      price: 2.88,
      imagePath: '/images/supermarket-products/feijão-verde.png',
      evaluation: 4.8
    },

    {
      name: 'Tomate',
      sector: 'frutas',
      price: 5.99,
      imagePath: '/images/supermarket-products/tomate.png',
      evaluation: 3.8
    },

    {
      name: 'Café',
      sector: 'bebidas',
      price: 5.89,
      imagePath: '/images/supermarket-products/café.png',
      evaluation: 4.9
    },
    
    {
      name: 'Chá',
      sector: 'bebidas',
      price: 3.99,
      imagePath: '/images/supermarket-products/chá.png',
      evaluation: 2.6
    }
  ]

  sectorProducts(sector: string){
    return this.products.filter((product) => product.sector === sector)
  }
}

