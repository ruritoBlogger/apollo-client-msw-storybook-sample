import { graphql } from "msw";
import { GraphQLError } from "graphql/error";

interface TodoQueryHandlerInput {
  loading?: boolean;
  errors?: string;
}

export const todoQueryHandler = ({
  loading,
  errors,
}: TodoQueryHandlerInput) => {
  return graphql.query("todo", (req, res, ctx) => {
    const { id } = req.variables;
    // TODO: errorの型情報が確定したら、それに合わせて返却する値も調整する
    if (typeof id !== "number") {
      return res(ctx.errors([new GraphQLError("variables is invalid")]));
    }

    if (loading) {
      return res(
        ctx.delay(1000 * 60 * 60 * 60),
        ctx.data({ todo: { id: id, name: "delay name", title: "delay title" } })
      );
    }

    if (errors) {
      return res(ctx.errors([new GraphQLError("error!!!")]));
    }

    return res(
      ctx.data({
        todo: {
          id: id,
          name: "TODO1",
          title: "test title",
        },
      })
    );
  });
};
