import {
  Body,
  Button,
  Container,
  Head,
  Heading,
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

export function ClientConfirmationEmail({
  name,
  date,
  time,
  platform,
  meetingLink,
  notes,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>Your discovery call with Chris Okafor is confirmed</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f9f9f9" }}>
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: 32 }}>
          <Heading style={{ fontSize: 24 }}>You&apos;re booked, {name} 👋</Heading>
          <Text>Here are your call details:</Text>
          <Section
            style={{ background: "#fff", borderRadius: 8, padding: 24 }}
          >
            <Text>
              <strong>Date:</strong> {date}
            </Text>
            <Text>
              <strong>Time:</strong> {time} (WAT)
            </Text>
            <Text>
              <strong>Duration:</strong> 30 minutes
            </Text>
            <Text>
              <strong>Platform:</strong>{" "}
              {platform === "zoom" ? "Zoom" : "Google Meet"}
            </Text>
          </Section>
          <Button
            href={meetingLink}
            style={{
              background: "#dc3545",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 6,
              display: "inline-block",
              marginTop: 24,
            }}
          >
            Join Meeting
          </Button>
          {notes && (
            <>
              <Hr />
              <Text style={{ color: "#666" }}>
                <strong>What you shared:</strong> {notes}
              </Text>
            </>
          )}
          <Hr />
          <Text style={{ fontSize: 12, color: "#999" }}>
            A calendar invite (.ics) is attached to this email. Click it to add
            this event to your calendar.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
