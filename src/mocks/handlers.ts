import { todoQueryHandler } from "../components/TestButton/todoQueryHandler";
import { todosQueryHandler } from "../components/TodoList/todosQueryHandler"

export const handlers = [todoQueryHandler({}), todosQueryHandler({})];
