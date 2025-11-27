import { Container } from "@/components/container";
import { Typography } from "@/components/typohraphy";

export default function WorkshopsPage() {
  return (
    <Container component="section" className="py-8">
      <div className="max-w-5xl space-y-12">
        <Typography variant="h3" component="h1" className="mb-12">
          Workshops
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Workshop 1 - Weekday */}
          <div className="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800 md:border-b-0 md:pb-0">
            <Typography variant="h5" component="h2">
              Studio Nude Photography
            </Typography>

            <Typography variant="subtitle1" className="text-gray-600 dark:text-gray-400">
              Weekday Session
            </Typography>

            <Typography variant="h6" className="text-primary">
              4,900 CZK
            </Typography>

            <Typography variant="body2" component="div">
              <strong>Duration & Location:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>2.5 hours of studio shooting</li>
                <li>Prague city center</li>
              </ul>
            </Typography>

            <Typography variant="body2" component="div">
              <strong>Included:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>One professional model</li>
                <li>Professional makeup and hair styling</li>
                <li>Two professional flash lights (400w + 800w)</li>
                <li>Nikon D100 camera rental (complimentary)</li>
                <li>Refreshments (beverages, coffee/tea, water, pizza)</li>
                <li>Photographer guidance available</li>
                <li>Model permission for personal use (exhibitions, publications, magazine features, competitions)</li>
              </ul>
            </Typography>

            <Typography variant="body2" className="italic text-gray-600 dark:text-gray-400">
              Extended shooting available for additional fee
            </Typography>
          </div>

          {/* Workshop 2 - Weekend */}
          <div className="space-y-4">
            <Typography variant="h5" component="h2">
              Studio Nude Photography
            </Typography>

            <Typography variant="subtitle1" className="text-gray-600 dark:text-gray-400">
              Weekend Session
            </Typography>

            <Typography variant="h6" className="text-primary">
              8,900 CZK
            </Typography>

            <Typography variant="body2" component="div">
              <strong>Duration & Location:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>4.5 hours of studio shooting</li>
                <li>Prague city center</li>
              </ul>
            </Typography>

            <Typography variant="body2" component="div">
              <strong>Included:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>One professional model</li>
                <li>Professional makeup and hair styling</li>
                <li>Two professional flash lights (400w + 800w)</li>
                <li>Nikon D100 camera rental (complimentary)</li>
                <li>Refreshments (beverages, coffee/tea, water, pizza)</li>
                <li>Photographer guidance available</li>
                <li>Model permission for personal use (exhibitions, publications, magazine features, competitions)</li>
              </ul>
            </Typography>

            <Typography variant="body2" className="italic text-gray-600 dark:text-gray-400">
              Extended shooting available for additional fee
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
