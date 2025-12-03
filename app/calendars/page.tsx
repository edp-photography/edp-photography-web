import { Typography } from "@/components/typohraphy";
import Image from "next/image";

export default function CalendarsPage() {
  return (
    <section className="container-fluid mx-auto my-8">
      <Typography variant="h2" className="mb-8 text-center">
        CALENDARS
      </Typography>

      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-4xl aspect-4/3">
          <Image
            src="https://emanueldellapia.com/img/EDPcal2016.png"
            alt="Calendar preview"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <Typography variant="h4" className="mb-4">
            A3 LUXURY Calendar
          </Typography>
          <ul className="space-y-2">
            <li>
              <Typography variant="body1">13 pages</Typography>
            </li>
            <li>
              <Typography variant="body1">Glossy paper</Typography>
            </li>
            <li>
              <Typography variant="body1">250 gsm weight</Typography>
            </li>
            <li>
              <Typography variant="body1" className="font-semibold">
                Price: 490 CZK/piece
              </Typography>
            </li>
          </ul>
        </div>

        <div>
          <Typography variant="h4" className="mb-4">
            Service - Photoshoot + Calendar Processing
          </Typography>
          <ul className="space-y-2">
            <li>
              <Typography variant="body1">
                Interior/Studio: 8,490 CZK
              </Typography>
            </li>
            <li>
              <Typography variant="body1">Location: 15,490 CZK</Typography>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-accent p-6">
          <Typography variant="h5" className="mb-2">
            Special Offer
          </Typography>
          <Typography variant="body1" className="font-semibold">
            20% DISCOUNT until the end of 2015
          </Typography>
        </div>
      </div>
    </section>
  );
}
