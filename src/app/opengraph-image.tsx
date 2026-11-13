import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = "Raj Dangi: I like to make stuff, play with stuff, and break stuff until I understand it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const root = process.cwd();
  const [medium, italic, hands] = await Promise.all([
    readFile(join(root, "assets/fonts/CormorantGaramond-Medium.ttf")),
    readFile(join(root, "assets/fonts/CormorantGaramond-Italic.ttf")),
    readFile(join(root, "public/assets/creation_of_adam.png")),
  ]);
  const handsSrc = `data:image/png;base64,${hands.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f1e7",
          color: "#2b2117",
          fontFamily: "Cormorant",
          fontWeight: 500,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: "1px solid #b9a78f",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: "1px solid #cdbda6",
            display: "flex",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={handsSrc} width={420} height={280} alt="" style={{ marginTop: -30 }} />
        <div style={{ fontSize: 92, fontWeight: 500, fontStyle: "normal", letterSpacing: 18, textTransform: "uppercase", marginTop: -10 }}>
          Raj Dangi
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 10, color: "#8f6a3a", fontSize: 30 }}>
          <div style={{ width: 120, height: 1, background: "#b9a78f", marginRight: 22 }} />
          <div style={{ width: 9, height: 9, background: "#8f6a3a", transform: "rotate(45deg)" }} />
          <div style={{ width: 120, height: 1, background: "#b9a78f", marginLeft: 22 }} />
        </div>
        <div style={{ fontStyle: "italic", fontWeight: 400, fontSize: 38, marginTop: 14, color: "#4a3b2c" }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 22, fontStyle: "normal", letterSpacing: 6, marginTop: 34, color: "#7b6a55", textTransform: "uppercase" }}>
          philosrach.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: medium, style: "normal", weight: 500 },
        { name: "Cormorant", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
