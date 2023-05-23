import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export default class BookService {

  private bookSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  book$:Observable<Book[]> = this.bookSubject.asObservable()  ;

  constructor(private http:HttpClient) {
    this.getAllBooks().subscribe(data => this.bookSubject.next(data));
   }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8080/book/list-book")
    .pipe(
      shareReplay()
    );

  }

  findBookById(id : number):Observable<Book>{
    return this.book$.pipe(
      map(books => books.find(b => b.id === id))
    )as Observable<Book>;
  }

}
