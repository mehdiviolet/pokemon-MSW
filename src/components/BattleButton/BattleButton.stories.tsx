import type { Meta, StoryObj } from "@storybook/react-vite";
import { BattleButton } from "./BattleButton";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/BattleButton",
  component: BattleButton,
  tags: ["autodocs"],
  // Qui definiamo i props comuni a tutte le storie
  args: {
    onClick: fn(), // Cattura il click nel pannello Actions
  },
} satisfies Meta<typeof BattleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Stato Iniziale (Idle)
export const Initial: Story = {
  args: {
    children: "SIMULA COMBATTIMENTO",
    disabled: false,
  },
};

// 2. Durante la Battaglia (Running/Queued) - DISABILITATO
export const Running: Story = {
  args: {
    children: "STA COMBATTENDO...",
    disabled: true, // Importante: questo è l'unico caso disabilitato
  },
};

// 3. Vittoria (Done - Vivo)
export const Victory: Story = {
  args: {
    children: "VITTORIA, LOTTA ANCORA",
    disabled: false,
  },
};

// 4. Sconfitta (Done - Morto/HP 0)
export const Defeat: Story = {
  args: {
    children: "HAI PERSO, RIPROVA!",
    disabled: false,
  },
};

// 5. Errore Tecnico/Random (Failed)
export const ErrorRetry: Story = {
  args: {
    children: "SIMULA NUOVAMENTE",
    disabled: false,
  },
};
