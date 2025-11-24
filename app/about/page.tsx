import { Container } from "@/components/container";
import { Typography } from "@/components/typohraphy";
import { NAVBAR_HEIGTH } from "@/constants/layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div style={{ height: `${NAVBAR_HEIGTH}px` }} />
      <Container component="section" className="py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
          {/* Quote and Content */}
          <div className="order-2 md:order-1">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-tight mb-8 pl-8 md:pl-12 text-right">
              Photography is the story I fail to put into words.
            </blockquote>

            {/* Content Sections */}
            <div>
              <Typography variant="h3">THE EARLY DAYS</Typography>
              <Typography variant="body2">
                Emanuel Della Pia is an internationally acclaimed photographer
                and visual artist, working between Prague and Rome. His work
                spans magazines, commercials, interiors, calendars, and
                portraits of notable figures, blending glamour, fashion, and
                fine art.
              </Typography>
              <Typography variant="body2">
                With decades of experience, Emanuel captures compelling stories
                through his lens, collaborating with top models, musicians, and
                cultural icons. His portfolio reflects a passion for creativity
                and visual storytelling.
              </Typography>

              <Typography variant="h3">
                CAREER-DEFINING EDITORIAL WORK
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>

              <Typography variant="h3">EXHIBITIONS</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              <Typography variant="h3">AWARDS</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>

              <Typography variant="h3">PRESS</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 md:shrink-0 md:w-1/2 flex justify-center">
            <div className="w-full max-w-xl">
              <Image
                src="/images/about/2.jpg"
                alt="Emanuel Della Pia"
                width={1024}
                height={1024}
                className="w-full h-auto object-cover"
              />
              <Typography
                variant="caption"
                className="mt-2 text-xs uppercase tracking-wide"
              >
                PHOTOGRAPHING NELSON MANDELA IN CAPE TOWN, SOUTH AFRICA 1995 /
                PHOTOGRAPH BY CHRIS LAWRENCE
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
