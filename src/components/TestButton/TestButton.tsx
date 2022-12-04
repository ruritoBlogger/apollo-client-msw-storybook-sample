import { Button } from "@mui/material";
import { useState } from "react";
import { gql } from "@apollo/client";
import { DocumentNode } from "graphql";
import { useTodoQuery } from "../../generated/graphql";

const GET_TODO: DocumentNode = gql`
  query todo($id: Int!) {
    todo(id: $id) {
      id
      name
      title
    }
  }
`;

export const TestButton = () => {
  const [message, setMessage] = useState<string>("テスト用ボタン");
  const { data, loading, error } = useTodoQuery({ variables: { id: 1 } });

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error!!!</p>;
  }

  const handleClick = () => {
    setMessage(`${data?.todo?.name ?? ""}`);
  };

  return (
    <>
      <Button variant={"outlined"} color={"warning"} onClick={handleClick}>
        {message}
      </Button>
    </>
  );
};
