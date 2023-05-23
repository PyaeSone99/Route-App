import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, of, tap } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  cart$:Observable<Book[]> = this.cartSubject.asObservable();
  books:Book[] = [];
  book!: Book;

  constructor() { }

  public addToCart(book:Book):void{
      this.isExisted(book)
        .subscribe(data => this.book = data);
      if (!this.book){
        this.books.push(book);
        this.cartSubject.next(this.books);
      }
  }

  isExisted(book:Book):Observable<Book>  {
    return of(this.books).pipe(
      map ( books => books.find (b => b.id === book.id )as Book)
    );
  }

  remove(id:number):void{
      this.cart$.pipe(map(ds => ds.filter(d => d.id != id) as Book[])).subscribe(data => {
        this.books = data,this.cartSubject.next(this.books);
      })
  }

}
