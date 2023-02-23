
export interface newTodo {
  title: string,
  complete: boolean
}

export interface Todo extends newTodo {
  userId: number,
  id: number,
}