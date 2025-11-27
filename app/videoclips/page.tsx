import { Container } from "@/components/container";
import { Typography } from "@/components/typohraphy";

export default function VideoclipsPage() {
  return (
    <Container component="section" className="py-8">
      <Typography variant="h1" className="mb-8 text-center">
        VIDEOCLIPS
      </Typography>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="relative aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Co3iu8zK0yY?si=TVBwRQv6vLs-5FV1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
