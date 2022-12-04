import { composeStories } from "@storybook/testing-react";
import * as stories from "./TestButton.stories";
import { server } from "../../mocks";
import { todoQueryHandler } from "./todoQueryHandler";
import { customRender } from "../../utils/customRenderer";

test("TestButtonをレンダリングした時, 正常に表示されること", async () => {
  const { Default } = composeStories(stories);
  const { findByRole } = customRender(<Default />);

  expect(
    await findByRole("button", { name: "テスト用ボタン" })
  ).toBeInTheDocument();
});

test("TestButtonをクリックした時, ボタンのテキストが変化すること", async () => {
  server.use(todoQueryHandler({}));
  const { ClickButton } = composeStories(stories);
  const { container, findByRole } = customRender(<ClickButton />);
  await ClickButton.play({ canvasElement: container });

  expect(await findByRole("button", { name: "TODO1" })).toBeInTheDocument();
});
