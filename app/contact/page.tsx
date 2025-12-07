import { Link } from "@/components/link";
import { getGlobal } from "@/data/global";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import { ContactForm } from "./components/contact-form";

export default async function ContactPage() {
  const { data: globalData } = await getGlobal();

  return (
    <section className="container-fluid mx-auto my-8">
      <h2 className={cn(typography({ variant: "h2" }), "mb-8")}>
        GET IN TOUCH
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div>
          <h3 className={cn(typography({ variant: "h3" }), "mb-8")}>
            Contact Information
          </h3>
          <address className="space-y-6 not-italic">
            <div>
              <strong className={cn(typography({ variant: "h5" }))}>
                STUDIO
              </strong>
              <p className={cn(typography({ variant: "body1" }))}>
                <Link
                  external
                  href={globalData.googleMapsUrl}
                  className="hover:underline"
                >
                  {globalData.address}
                </Link>
              </p>
            </div>

            <div>
              <strong className={cn(typography({ variant: "h5" }))}>
                EMAIL
              </strong>
              <p className={cn(typography({ variant: "body1" }))}>
                <Link
                  external
                  href={`mailto:${globalData.email}`}
                  className="hover:underline"
                >
                  {globalData.email}
                </Link>
              </p>
            </div>

            <div>
              <strong className={cn(typography({ variant: "h5" }))}>
                PHONE
              </strong>
              <p className={cn(typography({ variant: "body1" }))}>
                <Link
                  external
                  href={`tel:${globalData.phone}`}
                  className="hover:underline"
                >
                  {globalData.phone}
                </Link>
              </p>
            </div>
          </address>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className={cn(typography({ variant: "h3" }), "mb-8")}>
            Send a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
