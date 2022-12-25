import CounterButton from "./index.vue"
import type { StoryFn, Meta } from "@storybook/vue3";
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta = {
  title: 'components/CounterButton',
  component: CounterButton,
  argTypes: {
    count: {
      control: { type: 'number' },
    },
    onClick: {
      action: true
    }
  },
};
export default meta;

const Template: StoryFn<typeof CounterButton> = (args) => ({
  components: { CounterButton },
  setup() {
    return { args };
  },
  template: '<counter-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  count: 0,
};

export const Counter = Template.bind({});
Counter.args = {
  count: 0,
};
Counter.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button')

  expect(button).toHaveTextContent('count is 0')
  await userEvent.click(button);
  await expect(args.onClick).toHaveBeenCalled();
}