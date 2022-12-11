import { graphql } from "msw";
import { GraphQLError } from "graphql/error";
import {TodosQuery, TodosQueryVariables} from "../../generated/graphql";

interface TodosQueryHandlerInput {
  loading?: boolean;
  isError?: boolean;
}

export const todosQueryHandler = ({
  loading,
  isError,
}: TodosQueryHandlerInput) => {
  return graphql.query<TodosQuery, TodosQueryVariables>("todos", (req, res, ctx) => {
    if (loading) {
      return res(
        ctx.delay(1000 * 60 * 60 * 60),
        ctx.data({ todos: [{ id: "TODO_1", name: "delay name", title: "delay title" }] })
      );
    }

    if (isError) {
      return res(ctx.errors([new GraphQLError("error!!!")]));
    }

    return res(
      ctx.data({
        todos: [{
          id: "TODO_1",
          name: "TODO1",
          title: "test title",
        }],
      })
    );
  });
};
