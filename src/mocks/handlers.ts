// src/mocks/handlers.ts
import { http, HttpResponse, delay } from "msw";
import { mockItems, mockItemDetails } from "./data";

// "Database" in memoria per i job
// Chiave: job_id, Valore: timestamp di creazione
const jobsDatabase = new Map<string, number>();

export const handlers = [
  // 1. LISTA
  http.get("/api/items", async () => {
    await delay(500);
    return HttpResponse.json(mockItems);
    // return HttpResponse.json([]); // test array vuota
  }),

  // 2. DETTAGLIO (Aggiornato per Array)
  http.get("/api/items/:id", async ({ params }) => {
    await delay(300);
    const { id } = params;

    // ORA USIAMO .find() PERCHÉ È UN ARRAY
    const pokemon = mockItemDetails.find((item) => item.id === id);

    if (!pokemon) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(pokemon);
  }),

  // 3. START JOB
  http.post("/api/items/:id/jobs", async () => {
    await delay(300);
    const jobId = `job_${Date.now()}`;
    jobsDatabase.set(jobId, Date.now());
    return HttpResponse.json({ job_id: jobId });
  }),

  // 4. JOB STATUS
  http.get("/api/jobs/:job_id", async ({ params }) => {
    const jobId = params.job_id as string;
    const createdAt = jobsDatabase.get(jobId);

    if (!createdAt) return new HttpResponse(null, { status: 404 });

    const elapsed = Date.now() - createdAt;

    if (elapsed < 1000) {
      return HttpResponse.json({
        status: "queued",
        progress: 0,
        health_points: null,
      });
    }
    // if (elapsed < 3000) {
    //   const progress = Math.min(
    //     100,
    //     Math.floor(((elapsed - 1000) / 2000) * 100),
    //   );
    //   return HttpResponse.json({
    //     status: "running",
    //     progress,
    //     health_points: null,
    //   });
    // }
    if (elapsed < 3000) {
      // --- LOGICA BONUS: DADO SFORTUNATO 🎲 ---
      // Ogni volta che il frontend chiede info, c'è il 10% di probabilità che fallisca.
      // Poiché il polling avviene più volte, la probabilità totale è circa il 20-30%.
      if (Math.random() < 0.1) {
        return HttpResponse.json({
          status: "failed", // <--- STATO FALLITO
          progress: 0,
          health_points: null,
        });
      }
      // ----------------------------------------

      const progress = Math.min(
        100,
        Math.floor(((elapsed - 1000) / 2000) * 100),
      );
      return HttpResponse.json({
        status: "running",
        progress,
        health_points: null,
      });
    }
    return HttpResponse.json({
      status: "done",
      progress: 100,
      health_points: Math.floor(Math.random() * 101),
    });
  }),
];
