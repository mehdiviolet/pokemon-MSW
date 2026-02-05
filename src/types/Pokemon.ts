// src/types/Pokemon.ts

// --- TIPI PER I SOTTO-OGGETTI ---
export interface Typology {
  name: string;
  icon_url: string;
  icon_name: string;
}

export interface Energy {
  name: string;
  icon_url: string;
}

export interface Vulnerability {
  icon_url: string;
  value: number;
}

// --- TIPO PER LA LISTA (Vetrina) ---
export interface PokemonListItem {
  id: string;
  name: string;
  short_description: string;
  image_url: string;
}

// --- TIPO PER IL DETTAGLIO (Scheda Completa) ---
export interface PokemonDetail {
  id: string;
  name: string;
  subtitle: string; // "Il Re dello Stress..."
  card_number: string; // "054"
  level: number;
  health_points: number;
  rarity: string; // "pokèmon_base"
  short_description: string; // Contiene HTML
  long_description: string; // Contiene HTML
  typology: Typology;
  energy: Energy;
  vulnerability: Vulnerability;
  extra_details: string; // URL immagine extra
  image_url: string;
}

// --- TIPI PER IL JOB (Restano uguali) ---
export type JobStatus = "queued" | "running" | "done" | "failed";

export interface JobResponse {
  job_id: string;
}

export interface JobStatusResponse {
  status: JobStatus;
  progress: number;
  health_points: number | null;
}
