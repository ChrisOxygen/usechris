import {
  Body,
  Container,
  Head,
  Heading,
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

export function OwnerNotificationEmail({
  clientName,
  clientEmail,
  date,
  time,
  platform,
  meetingLink,
  notes,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New booking from {clientName}</Preview>
      <Body style={{ fontFamily: "sans-serif" }}>
        <Container style={{ maxWidth: 560, margin: "0 auto", padding: 32 }}>
          <Heading>New Booking</Heading>
          <Section
            style={{ background: "#f4f4f4", borderRadius: 8, padding: 24 }}
          >
            <Text>
              <strong>Name:</strong> {clientName}
            </Text>
            <Text>
              <strong>Email:</strong> {clientEmail}
            </Text>
            <Text>
              <strong>Date:</strong> {date}
            </Text>
            <Text>
              <strong>Time:</strong> {time} WAT
            </Text>
            <Text>
              <strong>Platform:</strong>{" "}
              {platform === "zoom" ? "Zoom" : "Google Meet"}
            </Text>
            <Text>
              <strong>Link:</strong> {meetingLink}
            </Text>
            <Text>
              <strong>Purpose:</strong> {notes || "No notes provided"}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
