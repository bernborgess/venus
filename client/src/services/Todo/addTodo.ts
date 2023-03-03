import { newTodo } from "../../constants/todo";
import { api } from "../api";

export async function addTodo(body: newTodo): Promise<void> {
  await api.post("/todo", body);
}