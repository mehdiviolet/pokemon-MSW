import type { Preview } from "@storybook/react-vite";
import "../src/styles/main.scss";
import { initialize, mswLoader } from "msw-storybook-addon"; // 2. Per i dati finti
import { MemoryRouter } from "react-router-dom"; // 1. Per far funzionare i Link

// Inizializza MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  loaders: [mswLoader],

  // 5. Decoratore globale (avvolge tutte le storie)
  decorators: [
    (Story) => (
      // Avvolge ogni componente in un Router finto, altrimenti <Link> rompe tutto
      <MemoryRouter> 
        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default preview;
