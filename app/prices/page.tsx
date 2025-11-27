import { Container } from "@/components/container";
import { Typography } from "@/components/typohraphy";

export default function PricesPage() {
  return (
    <Container component="section" className="py-8">
      <div className="max-w-5xl space-y-16">
        <Typography variant="h3" component="h1" className="mb-12">
          Prices
        </Typography>

        {/* Premium Packages */}
        <section className="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800">
          <Typography variant="h5" component="h2">
            Premium Packages
          </Typography>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Book 1 */}
            <div className="space-y-4">
              <Typography variant="h6" component="h3">
                Book 1: Fashion, Glamour, Nude, Portrait, Couple
              </Typography>
              <Typography variant="body2">12,000 CZK</Typography>
              <Typography variant="body2" component="div">
                <strong>Includes:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>600 photos shot</li>
                  <li>600 delivered + 30 retouched selections</li>
                  <li>6 outfit changes</li>
                  <li>Professional makeup</li>
                  <li>Hair styling</li>
                </ul>
              </Typography>
            </div>

            {/* Book 2 */}
            <div className="space-y-4">
              <Typography variant="h6" component="h3">
                Book 2: Fashion, Glamour, Family, Children
              </Typography>
              <Typography variant="body2">6,000 CZK</Typography>
              <Typography variant="body2" component="div">
                <strong>Includes:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>300 photos shot</li>
                  <li>300 delivered + 10 retouched</li>
                  <li>3 outfit changes</li>
                </ul>
              </Typography>
              <Typography variant="body2" component="div">
                <strong>Add-ons:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Professional makeup: 1,000 CZK</li>
                  <li>Hair styling: 500 CZK</li>
                </ul>
              </Typography>
            </div>
          </div>
        </section>

        {/* Standard Services */}
        <section className="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800">
          <Typography variant="h5" component="h2">
            Standard Services
          </Typography>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Business Portrait */}
            <div className="space-y-4">
              <Typography variant="h6" component="h3">
                Business Portrait, Children, Babies, Family
              </Typography>
              <Typography variant="body2">3,000 CZK (max 4 people)</Typography>
              <Typography variant="body2" component="div">
                <strong>Includes:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>100 photos</li>
                  <li>3 retouched</li>
                  <li>3 outfit changes</li>
                </ul>
              </Typography>
              <Typography variant="body2" component="div">
                <strong>Add-ons:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Professional makeup: 1,000 CZK</li>
                  <li>Hair styling: 500 CZK</li>
                </ul>
              </Typography>
            </div>

            {/* Wedding Photography */}
            <div className="space-y-4">
              <Typography variant="h6" component="h3">
                Wedding Photography
              </Typography>
              <Typography variant="body2" component="div">
                <ul className="list-disc list-inside space-y-1">
                  <li>Option 1: 30,000 CZK (photos + video)</li>
                  <li>Option 2: 18,000 CZK (photos only)</li>
                </ul>
              </Typography>
              <Typography variant="body2" component="div">
                <strong>Includes:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Makeup and hair styling</li>
                </ul>
              </Typography>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="space-y-4">
          <Typography variant="h5" component="h2">
            Additional Services
          </Typography>

          <div className="space-y-3">
            <Typography variant="body2">
              <strong>Reportage:</strong> 3,500 CZK/hour, 1,500 CZK per
              additional hour
            </Typography>
            <Typography variant="body2">
              <strong>Mini portrait</strong> (single person/pet): 1,500 CZK
            </Typography>
            <Typography variant="body2">
              <strong>Commercial/catalog photography:</strong> Quote upon
              request
            </Typography>
            <Typography variant="body2">
              <strong>Music video/commercial production:</strong> Quote upon
              request
            </Typography>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <Typography variant="body2" className="italic">
            <strong>Payment Terms:</strong> 50% deposit required
            (non-refundable); dates remain flexible with deposit validity.
          </Typography>
        </section>
      </div>
    </Container>
  );
}
