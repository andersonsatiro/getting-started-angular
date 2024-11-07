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
        title: 'delectus aut autem',
        status: 'finalizada',
        email: 'anderson@js.gmail.com',
        date: new Date(),
        website: 'anderson.com.br'
      },
      {
        user: 'joao.ricardo',
        title: 'delectus aut autem',
        status: 'pendente',
        email: 'joao@java.gmail.com',
        date: new Date(),
        website: 'joao.com.br'
      },
      {
        user: 'maria.silva',
        title: 'delectus aut autem',
        status: 'finalizada',
        email: 'maria@py.gmail.com',
        date: new Date(),
        website: 'maria.com.br'
      }
    ]
  }
}

// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/users