import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogImageAlt = "Kyle Robins · DevOps & Full Stack Engineer";
export const ogImageSize = { width: 1200, height: 630 };

export async function renderOgImage() {
  const photoBuffer = await readFile(
    join(process.cwd(), "public/images/Kyle-Robins.jpeg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#13201b",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(76,128,102,0.35), transparent 55%), radial-gradient(circle at 82% 78%, rgba(76,128,102,0.22), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 680 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#8ebaa2",
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#4c8066",
              }}
            />
            Nairobi, Kenya
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              color: "#f4f9f6",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Kyle Robins
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              color: "#4c8066",
              marginBottom: 24,
            }}
          >
            DevOps Engineer · Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#c7d9d0",
              lineHeight: 1.5,
            }}
          >
            Building resilient cloud infrastructure and delightful
            full-stack products.
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og's Satori renderer only supports plain <img>, not next/image */}
        <img
          src={photoSrc}
          alt=""
          width={400}
          height={400}
          style={{
            borderRadius: 32,
            objectFit: "cover",
            border: "4px solid rgba(76,128,102,0.5)",
          }}
        />
      </div>
    ),
    { ...ogImageSize }
  );
}
