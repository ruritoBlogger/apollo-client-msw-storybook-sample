import { composeStories } from "@storybook/testing-react";
import * as stories from "./TestButton.stories";
import { render, RenderResult } from "@testing-library/react";
import { server } from "../../mocks";
import { createTodoQueryHandler } from "../../mocks/handler/todoQueryHandler";
import { TestRenderer } from "../../utils/TestRenderer";
import { ComponentType, ReactElement } from "react";

// TODO: 別ファイルに切り出す
function customRender(component: ReactElement): RenderResult {
  function Wrapper({ children }: { children: ReactElement }): JSX.Element {
    return <TestRenderer>{children}</TestRenderer>;
  }

  return {
    ...render(component, {
      wrapper: Wrapper as ComponentType,
    }),
  };
}

test("TestButtonをレンダリングした時, 正常に表示されること", async () => {
  const { Default } = composeStories(stories);
  const { findByRole } = customRender(<Default />);

  expect(
    await findByRole("button", { name: "テスト用ボタン" })
  ).toBeInTheDocument();
});

test("TestButtonをクリックした時, ボタンのテキストが変化すること", async () => {
  server.use(createTodoQueryHandler({}));
  const { ClickButton } = composeStories(stories);
  const { container, findByRole } = customRender(<ClickButton />);
  await ClickButton.play({ canvasElement: container });

  expect(await findByRole("button", { name: "TODO1" })).toBeInTheDocument();
});
