import type { Meta, StoryObj } from "@storybook/react-vite";
import { BattleProgressBar } from "./BattleProgressBar";

const meta = {
  title: "Atoms/BattleProgressBar",
  component: BattleProgressBar,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BattleProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Queued: Story = {
  args: {
    progress: 0,
    status: "queued",
    isVisible: true,
  },
};

export const Running50: Story = {
  args: {
    progress: 50,
    status: "running",
    isVisible: true,
  },
};

export const Done: Story = {
  args: {
    progress: 100,
    status: "done",
    isVisible: true,
  },
};

export const Failed: Story = {
  args: {
    progress: 65, // Si è bloccato al 65%
    status: "failed",
    isVisible: true,
  },
};
