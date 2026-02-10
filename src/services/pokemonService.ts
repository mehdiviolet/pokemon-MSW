// src/services/pokemonService.ts
import {
  type PokemonListItem,
  type PokemonDetail,
  type JobResponse,
  type JobStatusResponse,
} from "../types/Pokemon";

// Helper per gestire gli errori HTTP (DRY Principle)
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }
  return await response.json();
}

// 1. Ottieni la lista (Vetrina)
export const getPokemonList = async (): Promise<PokemonListItem[]> => {
  const response = await fetch("/api/items");
  // const response = await fetch("/api/items404");
  return handleResponse<PokemonListItem[]>(response);
};

// 2. Ottieni il dettaglio (Scheda singola)
export const getPokemonDetail = async (id: string): Promise<PokemonDetail> => {
  const response = await fetch(`/api/items/${id}`);
  return handleResponse<PokemonDetail>(response);
};

// 3. Avvia la battaglia (POST) -> Ci ridà un job_id
export const startBattleJob = async (
  pokemonId: string,
): Promise<JobResponse> => {
  const response = await fetch(`/api/items/${pokemonId}/jobs`, {
    method: "POST",
  });
  return handleResponse<JobResponse>(response);
};

// 4. Controlla lo stato (Polling)
export const getJobStatus = async (
  jobId: string,
): Promise<JobStatusResponse> => {
  const response = await fetch(`/api/jobs/${jobId}`);
  return handleResponse<JobStatusResponse>(response);
};
