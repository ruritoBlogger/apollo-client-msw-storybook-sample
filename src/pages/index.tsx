import type { NextPage } from "next";
import { Button, Container, Typography } from "@mui/material";
import { TestButton } from "../components/TestButton";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Typography className={"caret-blue-400"}>
          Storybookのサンプル
        </Typography>
        <TestButton />
      </Container>
    </>
  );
};

export default Home;
