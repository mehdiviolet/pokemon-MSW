import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypeBadge } from "./TypeBadge";
// import water_drop from "../../assets/icons/water_drop.svg";
const water_drop = "assets/icons/water_drop.svg";

const meta = {
  title: "Atoms/TypeBadge",
  component: TypeBadge,
  tags: ["autodocs"],
} satisfies Meta<typeof TypeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Esempio 1: Acqua (Icona SVG finta per demo)
export const Water: Story = {
  args: {
    name: "acqua",
    iconUrl: water_drop, // Placeholder
  },
};

// Esempio 2: Elettro
export const Electric: Story = {
  args: {
    name: "elettro",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616494.png", // Placeholder
  },
};
