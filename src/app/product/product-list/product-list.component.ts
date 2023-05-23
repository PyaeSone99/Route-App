import { Component, OnInit } from '@angular/core';
import BookService from 'src/app/service/book.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    constructor(public bookService:BookService){};

    ngOnInit(): void {
      console.log(this.bookService.book$);

    }

}
