import type { Meta, StoryObj } from "@storybook/react-vite";
import { BattleWidget } from "./BattleWidget";
import { mockItemDetails } from "../../mocks/data";

const meta: Meta<typeof BattleWidget> = {
  title: "Molecules/BattleWidget",
  component: BattleWidget,
  tags: ["autodocs"],
  // Configuriamo l'azione per vedere se il click funziona
  argTypes: {
    onStartBattle: { action: "clicked start" },
  },
};

export default meta;
type Story = StoryObj<typeof BattleWidget>;

const basePokemon = mockItemDetails[0]; // Psyduck

// 1. IDLE
export const Default: Story = {
  args: {
    pokemon: basePokemon,
    status: "idle",
    progress: 0,
    error: null,
  },
};

// 2. RUNNING
export const Running: Story = {
  args: {
    pokemon: basePokemon,
    status: "running",
    progress: 60,
    error: null,
  },
};

// 3. FAILED (Quello che ti interessa ora!)
export const FailedState: Story = {
  args: {
    pokemon: basePokemon,
    status: "failed",
    progress: 0,
    error: null,
  },
};

// 4. DEFEAT (Perso)
export const Defeat: Story = {
  args: {
    pokemon: { ...basePokemon, health_points: 0 },
    status: "done",
    progress: 100,
    error: null,
  },
};

// 5. VICTORY
export const Victory: Story = {
  args: {
    pokemon: { ...basePokemon, health_points: 80 },
    status: "done",
    progress: 100,
    error: null,
  },
};
