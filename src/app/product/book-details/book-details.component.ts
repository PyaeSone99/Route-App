import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import BookService from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{

  book$!:Observable<Book>;

  constructor(private bookService: BookService,private route:ActivatedRoute,private router:Router,private cartService:CartService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.book$ = this.bookService.findBookById(parseInt(id));
  }

  public addToCart():void{
      this.book$.subscribe(data => this.cartService.addToCart(data));
  }

  public goHome():void{
    this.router.navigate(['/book'])
  }
}
