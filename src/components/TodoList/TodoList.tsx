import { gql } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useTodosQuery } from "../../generated/graphql";
import { Container  } from "@mui/material"

const GET_TODOS: DocumentNode = gql`
  query todos {
    todos {
      id
      name
      title
    }
  }
`;

export const TodoList = (): JSX.Element => {
  const { data, loading, error } = useTodosQuery();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error || data === undefined) {
    return <p>error!!!</p>;
  }

  return (
    <>
      <Container>
        {data.todos.map(todo => {
          return (<div key={todo.id}>
           <p>{todo.name}</p>
          </div>)
        })}
      </Container>
    </>
  );
};
