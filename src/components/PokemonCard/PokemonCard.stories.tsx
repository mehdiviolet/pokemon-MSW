import type { Meta, StoryObj } from "@storybook/react-vite";
import { PokemonCard } from "./PokemonCard";
import { mockItemDetails } from "../../mocks/data";

const meta = {
  title: "Molecules/PokemonCard",
  component: PokemonCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          background: "#ccc",
        }}
      >
        {/* Sfondo grigio per vedere bene il contrasto della card bianca */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PokemonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. STATO NORMALE (Blu)
export const Normal: Story = {
  args: {
    pokemon: mockItemDetails[0], // Psyduck base
  },
};

// 2. STATO WARNING (Rosso)
export const Warning: Story = {
  args: {
    pokemon: {
      ...mockItemDetails[0],
      health_points: 10, // < 20
    },
  },
};

// 3. STATO DEFEATED (Grigio)
export const Defeated: Story = {
  args: {
    pokemon: {
      ...mockItemDetails[0],
      health_points: 0,
    },
  },
};
