import * as stories from "./TodoList.stories"
import { server } from "../../mocks";
import { customRender } from "../../utils/customRenderer";
import {composeStories} from "@storybook/testing-react";
import {todosQueryHandler} from "./todosQueryHandler";

test("レンダリングした時, 正常に表示されること", async () => {
  const { Default } = composeStories(stories);
  const { findByText } = customRender(<Default />);

  expect(
    await findByText("TODO1" )
  ).toBeInTheDocument();
});

test("データの取得に失敗した際にエラーを表示すること", async () => {
  server.use(todosQueryHandler({isError: true}))
  const { OnError } = composeStories(stories);
  const { findByText } = customRender(<OnError />);

  expect(
    await findByText("error!!!" )
  ).toBeInTheDocument();
});

test("データの読み込み中は読み込み中であることを表示すること", async () => {
  server.use(todosQueryHandler({loading: true}))
  const { Loading } = composeStories(stories);
  const { findByText } = customRender(<Loading />);

  expect(
    await findByText("loading..." )
  ).toBeInTheDocument();
});