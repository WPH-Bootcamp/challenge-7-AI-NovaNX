export type FormData = {
  name: string;
  email: string;
  message: string;
  services: string[];
};

// Simulate network call with 1.2s delay and random success/failure
export async function submitMessage(data: FormData): Promise<{ ok: true }> {
  await new Promise((res) => setTimeout(res, 1200));
  // Basic guard: if missing required, fail immediately
  if (!data.name || !data.email || !data.message) {
    throw new Error("Semua field wajib diisi");
  }
  // Option C: deterministic rule for testing — fail if email contains "fail"
  if (data.email.toLowerCase().includes("fail")) {
    throw new Error("Gagal mengirim pesan (simulasi) — email memicu kegagalan");
  }
  return { ok: true };
}
