import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPreview } from "./CardPreview";
import { mockItems } from "../../mocks/data"; // Importiamo i dati della lista

const meta = {
  title: "Molecules/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "300px", padding: "20px" }}>
        {/* Limitiamo la larghezza per simulare una colonna della griglia */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Prendiamo il primo elemento della lista (Psyduck)
    ...mockItems[0],
  },
};

export const Sprigatito: Story = {
  args: {
    // Se hai un secondo elemento, usiamo quello
    ...(mockItems[1] || mockItems[0]),
  },
};
