import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TodoList } from "./TodoList";
import {todosQueryHandler} from "./todosQueryHandler";

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
