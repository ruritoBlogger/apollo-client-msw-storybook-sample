import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";
import {todosQueryHandler} from "./todosQueryHandler";
import {disableCacheDecorator} from "../../utils/customStoryDecorator";

export default {
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

export const Default: ComponentStoryObj<typeof TodoList> = {
  args: {},
  name: "通常時",
  parameters: {
    msw: {
      handlers: [todosQueryHandler({})]
    },
  },
};

export const OnError: ComponentStoryObj<typeof TodoList> = {
  args: {},
  name: "データ取得に失敗時",
  parameters: {
    msw: {
      handlers: [todosQueryHandler({isError: true})]
    },
  },
  decorators: [disableCacheDecorator]
};

export const Loading: ComponentStoryObj<typeof TodoList> = {
  args: {},
  name: "データ取得中時",
  parameters: {
    msw: {
      handlers: [todosQueryHandler({loading: true})]
    },
  },
  decorators: [disableCacheDecorator]
};