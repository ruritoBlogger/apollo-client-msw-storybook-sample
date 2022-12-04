import { TestButton } from "./TestButton";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { todoQueryHandler } from "./todoQueryHandler";
import { disableCacheDecorator } from "../../utils/customStoryDecorator";

export default {
  component: TestButton,
} as ComponentMeta<typeof TestButton>;

export const Default: ComponentStoryObj<typeof TestButton> = {
  args: {},
  name: "通常時",
  parameters: {
    msw: {
      handlers: [todoQueryHandler({})],
    },
  },
};

export const ClickButton: ComponentStoryObj<typeof TestButton> = {
  ...Default,
  name: "ボタンをクリックした時",
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);

    await userEvent.click(
      await screen.findByRole("button", { name: "テスト用ボタン" })
    );
  },
};

export const OnError: ComponentStoryObj<typeof TestButton> = {
  name: "データの取得に失敗したとき",
  decorators: [disableCacheDecorator],
  parameters: {
    msw: {
      handlers: [todoQueryHandler({ errors: "エラーだよ！！" })],
    },
  },
};

export const Loading: ComponentStoryObj<typeof TestButton> = {
  name: "データの取得中の時",
  decorators: [disableCacheDecorator],
  parameters: {
    msw: {
      handlers: [todoQueryHandler({ loading: true })],
    },
  },
};
