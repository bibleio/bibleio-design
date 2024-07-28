import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Select",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="eggplant">Eggplant</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
        <SelectItem value="carrot" disabled>
          Carrot
        </SelectItem>
        <SelectItem value="zucchini">Zucchini</SelectItem>
        <SelectItem value="leek">Leek</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Meat</SelectLabel>
        <SelectItem value="beef">Beef</SelectItem>
        <SelectItem value="chicken">Chicken</SelectItem>
        <SelectItem value="lamb">Lamb</SelectItem>
        <SelectItem value="pork">Pork</SelectItem>
      </SelectGroup>
    </Select>
  ),
};
Default.args = {
  label: "Select a food",
  disabled: false,
};
