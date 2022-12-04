import { TestButton } from "./TestButton";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { createTodoQueryHandler } from "../../mocks/handler/todoQueryHandler";
import { TestRenderer } from "../../utils/TestRenderer";

export default {
  component: TestButton,
  decorators: [
    (Story) => (
      <TestRenderer>
        <Story />
      </TestRenderer>
    ),
  ],
} as ComponentMeta<typeof TestButton>;

export const Default: ComponentStoryObj<typeof TestButton> = {
  args: {},
  storyName: "通常時",
  parameters: {
    msw: {
      handlers: [createTodoQueryHandler({})],
    },
  },
};

export const ClickButton: ComponentStoryObj<typeof TestButton> = {
  ...Default,
  storyName: "ボタンをクリックした時",
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);

    await userEvent.click(
      await screen.findByRole("button", { name: "テスト用ボタン" })
    );
  },
};

export const Error: ComponentStoryObj<typeof TestButton> = {
  storyName: "データの取得に失敗したとき",
  parameters: {
    msw: {
      handlers: [createTodoQueryHandler({ errors: "エラーだよ！！" })],
    },
  },
};

export const Loading: ComponentStoryObj<typeof TestButton> = {
  storyName: "データの取得中の時",
  parameters: {
    msw: {
      handlers: [createTodoQueryHandler({ loading: true })],
    },
  },
};
