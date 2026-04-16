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
  name: string;
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
  accentHover: "#b52b38",
  text: "#1a1212",
  muted: "#7a6060",
  border: "#e8dfdf",
  pill: "#fdf2f3",
  pillBorder: "#f5c6cb",
};

const font =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

// ─── Detail row ───────────────────────────────────────────────────────────────
function DetailRow({
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
        padding: "10px 0",
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
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: c.muted,
                width: "38%",
                verticalAlign: "top",
                paddingTop: 2,
              }}
            >
              {label}
            </td>
            <td
              style={{
                fontFamily: font,
                fontSize: 13,
                color: c.text,
                fontWeight: 500,
                verticalAlign: "top",
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
export function ClientConfirmationEmail({
  name,
  date,
  time,
  platform,
  meetingLink,
  notes,
}: Props) {
  const firstName = name.split(" ")[0];
  const platformLabel = platform === "zoom" ? "Zoom" : "Google Meet";

  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </Head>
      <Preview>
        You&apos;re booked — {date} at {time} WAT
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
            maxWidth: 560,
            margin: "0 auto",
            padding: "32px 16px 40px",
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
            {/* Wordmark */}
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#ffffff",
                margin: "0 0 16px",
              }}
            >
              CHRIS OKAFOR
            </Text>

            {/* Accent line */}
            <div
              style={{
                width: 28,
                height: 2,
                backgroundColor: c.accent,
                borderRadius: 2,
                marginBottom: 16,
              }}
            />

            {/* Heading */}
            <Text
              style={{
                fontFamily: font,
                fontSize: 20,
                fontWeight: 700,
                color: "#ffffff",
                margin: "0 0 5px",
                lineHeight: "1.2",
              }}
            >
              You&apos;re booked, {firstName}.
            </Text>
            <Text
              style={{
                fontFamily: font,
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                margin: 0,
              }}
            >
              Looking forward to chatting with you.
            </Text>
          </Section>

          {/* ── Body card ────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: c.surface,
              padding: "24px 28px",
            }}
          >
            {/* Booking details label */}
            <Text
              style={{
                fontFamily: font,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: c.muted,
                margin: "0 0 4px",
              }}
            >
              Booking details
            </Text>

            <Hr style={{ borderColor: c.border, margin: "10px 0 0" }} />

            <DetailRow label="Date" value={date} />
            <DetailRow label="Time" value={`${time} (West Africa Time)`} />
            <DetailRow label="Duration" value="30 minutes" />
            <DetailRow label="Platform" value={platformLabel} last />

            {/* CTA */}
            <Section style={{ textAlign: "center" as const, marginTop: 24 }}>
              <Button
                href={meetingLink}
                style={{
                  backgroundColor: c.accent,
                  color: "#ffffff",
                  fontFamily: font,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  padding: "12px 28px",
                  borderRadius: 8,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Join Meeting →
              </Button>
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 11,
                  color: c.muted,
                  margin: "8px 0 0",
                }}
              >
                Or copy the link:{" "}
                <a
                  href={meetingLink}
                  style={{ color: c.accent, textDecoration: "none" }}
                >
                  {meetingLink}
                </a>
              </Text>
            </Section>
          </Section>

          {/* ── Notes (conditional) ──────────────────────────────────── */}
          {notes && (
            <Section
              style={{
                backgroundColor: c.pill,
                border: `1px solid ${c.pillBorder}`,
                borderTop: "none",
                padding: "16px 28px",
              }}
            >
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  color: c.accent,
                  margin: "0 0 6px",
                }}
              >
                What you shared
              </Text>
              <Text
                style={{
                  fontFamily: font,
                  fontSize: 13,
                  color: c.text,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                {notes}
              </Text>
            </Section>
          )}

          {/* ── Footer ───────────────────────────────────────────────── */}
          <Section
            style={{
              backgroundColor: c.surface,
              borderTop: `1px solid ${c.border}`,
              borderRadius: notes ? "0 0 14px 14px" : undefined,
              padding: "16px 28px 20px",
            }}
          >
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                color: c.muted,
                margin: "0 0 5px",
                lineHeight: "1.6",
              }}
            >
              A calendar invite (.ics) is attached — click it to add this event
              to your calendar automatically.
            </Text>
            <Text
              style={{
                fontFamily: font,
                fontSize: 11,
                color: c.muted,
                margin: 0,
              }}
            >
              Need to reschedule?{" "}
              <a
                href="https://usechris.dev"
                style={{ color: c.accent, textDecoration: "none" }}
              >
                Visit usechris.dev
              </a>{" "}
              to book a new slot.
            </Text>
          </Section>

          {/* ── Bottom branding ──────────────────────────────────────── */}
          <Text
            style={{
              fontFamily: font,
              fontSize: 10,
              color: "#b09090",
              textAlign: "center" as const,
              marginTop: 20,
            }}
          >
            © {new Date().getFullYear()} Chris Okafor · usechris.dev
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
