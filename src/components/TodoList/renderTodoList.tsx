import * as stories from "./TodoList.stories"
import { server } from "../../mocks";
import { customRender } from "../../utils/customRenderer";
import {composeStories} from "@storybook/testing-react";

test("レンダリングした時, 正常に表示されること", async () => {
  const { Default } = composeStories(stories);
  const { findByText } = customRender(<Default />);

  expect(
    await findByText("TODO1" )
  ).toBeInTheDocument();
});

test("データの取得に失敗した際にエラーを表示すること", async () => {
  const { OnError } = composeStories(stories);
  const { findByText } = customRender(<OnError />);

  "vitest": "^0.25.1"
  expect(
    await findByText("error!!!" )
  ).toBeInTheDocument();
});