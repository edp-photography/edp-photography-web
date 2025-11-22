import { FOOTER_HEIGHT_DESKTOP, NAVBAR_HEIGTH } from "@/constants/layout";

export default function ContactPage() {
  return (
    <section
      className={`min-h-[calc(100vh-${FOOTER_HEIGHT_DESKTOP}px)] pt-32 pb-16`}
    >
      <div className={`h-[${NAVBAR_HEIGTH}px]`}></div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold tracking-widest mb-12">CONTACT</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-bold tracking-widest mb-4">STUDIO</h3>
            <p className="text-muted-foreground text-lg">
              <a
                href="https://maps.google.com/?q=Žerotínova+1850,+130+00+Praha+3-Žižkov"
                target="_blank"
                rel="noopener noreferrer"
                className="p-0 hover:underline"
              >
                Žerotínova 1850, 130 00 Praha 3-Žižkov
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold tracking-widest mb-4">EMAIL</h3>
            <p className="text-muted-foreground text-lg">
              <a
                href="mailto:info@emanueldellapia.com"
                className="p-0 hover:underline"
              >
                info@emanueldellapia.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold tracking-widest mb-4">PHONE</h3>
            <p className="text-muted-foreground text-lg">
              <a href="tel:+420777073441" className="p-0  hover:underline">
                +420 777 07 34 41
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
