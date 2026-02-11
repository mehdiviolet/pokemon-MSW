import type { Meta, StoryObj } from "@storybook/react-vite";
import { BattleProgressBar } from "./BattleProgressBar";

const meta = {
  title: "Atoms/BattleProgressBar",
  component: BattleProgressBar,
  decorators: [
    (Story) => (
      <div style={{ width: "300px", padding: "20px", background: "#f5f7fa" }}>
        <Story />
      </div>
    ),
  ],
  // Impostiamo isVisible true di default per tutte le storie
  args: {
    isVisible: true,
  },
} satisfies Meta<typeof BattleProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Stato Iniziale: 0% (Queued)
export const Progress0: Story = {
  args: {
    progress: 0,
    status: "queued",
  },
};

// 2. Avanzamento: 25% (Running)
export const Progress25: Story = {
  args: {
    progress: 25,
    status: "running",
  },
};

// 3. Avanzamento: 75% (Running)
export const Progress75: Story = {
  args: {
    progress: 75,
    status: "running",
  },
};

// 4. Completato: 100% (Done)
export const Progress100: Story = {
  args: {
    progress: 100,
    status: "done",
  },
};

// Extra: Stato Fallito (Bloccato)
export const Failed: Story = {
  args: {
    progress: 45,
    status: "failed",
  },
};
