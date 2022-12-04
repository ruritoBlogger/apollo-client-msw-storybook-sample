import { createTodoQueryHandler } from "./handler/todoQueryHandler";
import { todosQueryHandler } from "../components/TodoList/todosQueryHandler"

export const handlers = [createTodoQueryHandler({}), todosQueryHandler({})];
