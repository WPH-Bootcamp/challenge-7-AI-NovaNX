import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Modal from "../Popup";
import { submitMessage } from "./submitMessage";

type FormState = {
  name: string;
  email: string;
  message: string;
  services: string[];
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    services: [],
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const [dialog, setDialog] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  const handleCloseDialog = () => {
    setDialog(null);
    setStatus("idle");
  };

  const handleSuccessClose = () => {
    setDialog(null);
    setStatus("idle");
    setForm({ name: "", email: "", message: "", services: [] });
  };

  const handleRetry = () => {
    setDialog(null);
    setStatus("idle");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") {
      return; // prevent double submit while submitting
    }
    setStatus("sending");
    try {
      const res = await submitMessage(form);
      if (res.ok) {
        setStatus("sent");
        setDialog({
          type: "success",
          message: "Pesan berhasil dikirim (simulasi).",
        });
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan tidak diketahui";
      setStatus("error");
      setDialog({ type: "error", message: msg });
    }
  };

  return (
    <section style={{ maxWidth: 640, margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
        Contact Us
      </h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.75rem" }}>
        <Input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={onChange("name")}
          error={status === "error" && !form.name}
          helperText={
            !form.name && status === "error" ? "Nama wajib diisi" : undefined
          }
        />
        <Input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={onChange("email")}
          error={status === "error" && !form.email}
          helperText={
            !form.email && status === "error" ? "Email wajib diisi" : undefined
          }
        />
        <textarea
          placeholder="Your message"
          value={form.message}
          onChange={onChange("message")}
          rows={5}
          style={{
            padding: "0.5rem 0.75rem",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontSize: "1rem",
          }}
        />
        <div style={{ display: "grid", gap: 8 }}>
          <label style={{ fontWeight: 600 }}>
            Services (pilih yang dibutuhkan):
          </label>
          {["Consulting", "Design", "Development", "Maintenance"].map((svc) => {
            const checked = form.services.includes(svc);
            return (
              <label
                key={svc}
                style={{ display: "flex", gap: 8, alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    setForm((prev) => ({
                      ...prev,
                      services: e.target.checked
                        ? [...prev.services, svc]
                        : prev.services.filter((s) => s !== svc),
                    }));
                  }}
                />
                <span>{svc}</span>
              </label>
            );
          })}
        </div>
        <Button disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {status === "error" && (!form.name || !form.email || !form.message) && (
        <p style={{ color: "#dc2626", marginTop: "0.5rem" }}>
          Mohon isi semua field.
        </p>
      )}

      <Modal
        open={Boolean(dialog)}
        title={dialog && dialog.type === "success" ? "Berhasil" : "Gagal"}
        onClose={handleCloseDialog}
      >
        <p style={{ marginTop: 4 }}>{dialog ? dialog.message : ""}</p>
        {dialog && dialog.type === "success" ? (
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={handleSuccessClose}
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                background: "yellow",
                cursor: "pointer",
              }}
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 8,
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={handleRetry}
              style={{
                padding: "0.5rem 0.75rem",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                background: "white",
                cursor: "pointer",
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
}
