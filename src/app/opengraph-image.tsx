import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt =
  "Dra. Adriana Melo — Alergista e Imunologista em Goiânia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#103128",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "#1d5544",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -320,
            left: -240,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "#a8562b",
            opacity: 0.16,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 64,
              background: "#faf7f2",
              color: "#103128",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            AM
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8ec3b1",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Alergia e Imunologia Clínica
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, color: "#faf7f2", lineHeight: 1.05 }}>
            {site.doctor.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              color: "#c3ded5",
              lineHeight: 1.35,
              maxWidth: 860,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Diagnóstico e tratamento de doenças alérgicas e imunodeficiências —
            adultos e crianças, em Goiânia e por teleconsulta.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 22,
            color: "#8ec3b1",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>{site.doctor.crm}</span>
          <span>·</span>
          <span>{site.doctor.rqe}</span>
          <span>·</span>
          <span>{site.contact.instagramHandle}</span>
        </div>
      </div>
    ),
    size,
  );
}
