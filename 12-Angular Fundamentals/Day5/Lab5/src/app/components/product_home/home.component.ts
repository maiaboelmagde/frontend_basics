import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnChanges{

  @Input() recievedProduct:any;

  ProductsList:{productName:string, productDisc:string, productImgUrl:string, productRate:number}[]=[
    {
      productName: 'Product 1',
      productDisc: 'Awesome product 1',
      productImgUrl: 'https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?fm=jpg&q=60&w=3000',
      productRate: 3
    },
    {
      productName: 'Product 2',
      productDisc: 'Awesome product 2',
      productImgUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg',
      productRate: 2
    },
    {
      productName: 'Product 3',
      productDisc: 'Awesome product 3',
      productImgUrl: 'https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000',
      productRate: 4
    },
    {
      productName: 'Product 4',
      productDisc: 'Awesome product 4',
      productImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s',
      productRate: 5
    },
    {
      productName: 'Product 5',
      productDisc: 'Awesome product 5',
      productImgUrl: 'https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?cs=srgb',
      productRate: 3
    }
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['recievedProduct'].firstChange){
      this.ProductsList.push(this.recievedProduct);
    }
  }
}


