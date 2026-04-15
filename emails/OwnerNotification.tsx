import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  clientName: string;
  clientEmail: string;
  date: string;
  time: string;
  platform: "zoom" | "google_meet";
  meetingLink: string;
  notes?: string;
}

// ─── Shared tokens ────────────────────────────────────────────────────────────
const c = {
  bg: "#f5f0f0",
  surface: "#ffffff",
  header: "#0d0909",
  accent: "#dc3545",
  text: "#1a1212",
  muted: "#7a6060",
  border: "#e8dfdf",
  tag: "#fdf2f3",
  tagBorder: "#f5c6cb",
};

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

// ─── Detail row ───────────────────────────────────────────────────────────────
function Row({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <Section
      style={{
        borderBottom: last ? "none" : `1px solid ${c.border}`,
        padding: "11px 0",
      }}
    >
      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontFamily: font,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: c.muted,
                width: "30%",
                verticalAlign: "top",
                paddingTop: 2,
              }}
            >
              {label}
            </td>
            <td
              style={{
                fontFamily: font,
                fontSize: 14,
                color: c.text,
                fontWeight: 500,
              }}
            >
              {value}
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export function OwnerNotificationEmail({
  clientName,
  clientEmail,
  date,
  time,
  platform,
  meetingLink,
  notes,
}: Props) {
  const platformLabel = platform === "zoom" ? "Zoom" : "Google Meet";

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        New booking — {clientName} · {date} at {time}
      </Preview>

      <Body
        style={{
          backgroundColor: c.bg,
          margin: 0,
          padding: 0,
          fontFamily: font,
        }}
      >
        <Container
          style={{
            maxWidth: 520,
            margin: "0 auto",
            padding: "40px 16px 48px",
          }}
        >
          {/* ── Header ───────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: c.header,
              borderRadius: "14px 14px 0 0",
              padding: "24px 28px 20px",
            }}
          >
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "rgba(255,255,255,0.4)",
                margin: "0 0 14px",
              }}
            >
              CHRIS OKAFOR · BOOKING SYSTEM
            </Text>

            <table
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  <td>
                    {/* Red pill badge */}
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: c.accent,
                        color: "#ffffff",
                        fontFamily: font,
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase" as const,
                        padding: "4px 10px",
                        borderRadius: 100,
                        marginBottom: 10,
                      }}
                    >
                      New Booking
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text
                      style={{
                        fontFamily: font,
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        lineHeight: "1.2",
                      }}
                    >
                      {clientName}
                    </Text>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text
                      style={{
                        fontFamily: font,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        margin: "4px 0 0",
                      }}
                    >
                      {clientEmail}
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* ── Details card ─────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: c.surface,
              padding: "24px 28px 20px",
            }}
          >
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: c.muted,
                margin: "0 0 4px",
              }}
            >
              Call details
            </Text>
            <Hr style={{ borderColor: c.border, margin: "10px 0 0" }} />

            <Row label="Date" value={date} />
            <Row label="Time" value={`${time} WAT`} />
            <Row label="Duration" value="30 minutes" />
            <Row label="Platform" value={platformLabel} last />
          </Section>

          {/* ── Notes ────────────────────────────────────────────────── */}
          {notes && (
            <Section
              style={{
                backgroundColor: c.tag,
                border: `1px solid ${c.tagBorder}`,
                borderTop: "none",
                borderBottom: "none",
                padding: "16px 28px",
              }}
            >
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: c.accent,
                  margin: "0 0 6px",
                }}
              >
                Client&apos;s notes
              </Text>
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 14,
                  color: c.text,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                {notes}
              </Text>
            </Section>
          )}

          {/* ── CTA ──────────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: c.surface,
              borderTop: `1px solid ${c.border}`,
              borderRadius: "0 0 14px 14px",
              padding: "20px 28px 24px",
              textAlign: "center" as const,
            }}
          >
            <Button
              href={meetingLink}
              style={{
                backgroundColor: c.accent,
                color: "#ffffff",
                fontFamily: font,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.05em",
                padding: "13px 28px",
                borderRadius: 8,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Open Meeting Link →
            </Button>
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                color: c.muted,
                margin: "10px 0 0",
              }}
            >
              {meetingLink}
            </Text>
          </Section>

          {/* ── Footer ───────────────────────────────────────────────── */}
          <Text
            style={{
              fontFamily: font,
              fontSize: 11,
              color: "#b09090",
              textAlign: "center" as const,
              marginTop: 24,
            }}
          >
            © {new Date().getFullYear()} Chris Okafor · usechris.dev
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
