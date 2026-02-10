// src/components/Loader/Loader.stories.tsx
// import type { Meta, StoryObj } from "@storybook/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Loader";
// import { Loader } from "./Loader";

const meta = {
  title: "Atoms/Loader", // Apparirà sotto la cartella "Atoms"
  component: Loader,
  parameters: {
    layout: "centered", // Lo centra nella pagina
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
