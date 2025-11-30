import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactFormEmail({
  name = "John Doe",
  email = "john@example.com",
  subject = "Project Inquiry",
  message = "I'd like to discuss a project with you.",
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .container {
              width: 100% !important;
              margin: 0 auto !important;
            }
            .content {
              padding: 0 16px !important;
            }
            .header {
              font-size: 24px !important;
            }
            .paragraph {
              font-size: 15px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container} className="container">
          <Section style={box} className="content">
            <Text style={heading} className="header">
              New Contact Form Submission
            </Text>

            <Hr style={hr} />

            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject}</Text>

            <Text style={label}>Message:</Text>
            <Text style={messageBox}>{message}</Text>

            <Hr style={hr} />

            <Text style={footer}>
              This message was sent via the contact form on chrisokafor.dev
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const container = {
  backgroundColor: "#000000",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "12px",
  maxWidth: "600px",
  border: "3px solid #000000",
};

const box = {
  padding: "0 48px",
};

const heading = {
  fontFamily: "'Inter', sans-serif",
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  textAlign: "center" as const,
  margin: "30px 0 20px",
  letterSpacing: "-0.5px",
};

const hr = {
  borderColor: "#333333",
  margin: "24px 0",
};

const label = {
  color: "#a3a3a3",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  textAlign: "left" as const,
  fontFamily: "'Inter', sans-serif",
  margin: "16px 0 4px",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  fontFamily: "'Inter', sans-serif",
  margin: "0 0 16px",
};

const messageBox = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  fontFamily: "'Inter', sans-serif",
  backgroundColor: "#1a1a1a",
  padding: "20px",
  borderRadius: "8px",
  border: "2px solid #333333",
  margin: "0 0 16px",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#737373",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  margin: "24px 0 0",
  fontFamily: "'Inter', sans-serif",
};
