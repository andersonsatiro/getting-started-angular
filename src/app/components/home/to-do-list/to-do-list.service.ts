import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToDoListService {

  constructor() { }

  getTasks() {
    return [
      {
        user: 'anderson.paiva',
        status: 'finalizada',
        email: 'anderson@js.gamil.com',
        date: new Date(),
        website: 'anderson.com.br'
      }
    ]
  }
}
