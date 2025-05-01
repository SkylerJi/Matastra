import Link from "next/link";

// Placeholder component for icons
// TODO: Replace with actual icons or an icon library
const IconPlaceholder = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Example icon path
    />
  </svg>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Optional Sticky Header
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="#" className="mr-6 flex items-center space-x-2">
            <IconPlaceholder className="h-6 w-6" /> // Replace with Logo
            <span className="font-bold">Matastra</span>
          </Link>
          <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              Features
            </Link>
            <Link href="#testimonials" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              Testimonials
            </Link>
            <Link href="#cta" className="transition-colors hover:text-foreground/80 text-muted-foreground">
              Get Started
            </Link>
          </nav>
        </div>
      </header>
      */}

      <main className="flex-1">
        {/* Hero */}
        <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Predict Power Grid Failures with Matastra AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Leverage state-of-the-art AI and real-time PMU analysis to ensure
                    grid stability and prevent costly outages before they happen.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#cta"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Request Demo
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              {/* Hero Visual Placeholder */}
              <div className="mx-auto flex aspect-square w-full max-w-[400px] items-center justify-center overflow-hidden rounded-xl bg-muted lg:order-last lg:max-w-none xl:max-w-[600px]">
                {/* TODO: Replace with relevant hero image or SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-48 w-48 text-muted-foreground/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <title>Power Grid Prediction Concept</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Matastra?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides unparalleled insights into grid health,
                  enabling proactive maintenance and enhanced reliability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {/* Feature Item */}
              <div className="grid gap-2">
                <div className="flex items-center justify-center md:justify-start">
                  <IconPlaceholder className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-center md:text-left">Real-Time Analysis</h3>
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Continuously monitor PMU data streams for instant anomaly detection.
                </p>
              </div>
              {/* Feature Item */}
              <div className="grid gap-2">
                 <div className="flex items-center justify-center md:justify-start">
                  <IconPlaceholder className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-center md:text-left">Predictive AI Engine</h3>
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Advanced machine learning models predict failures with high
                  accuracy, days or weeks in advance.
                </p>
              </div>
              {/* Feature Item */}
              <div className="grid gap-2">
                 <div className="flex items-center justify-center md:justify-start">
                  <IconPlaceholder className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-center md:text-left">Actionable Alerts</h3>
                <p className="text-sm text-muted-foreground text-center md:text-left">
                  Receive clear, prioritized alerts pinpointing potential issues and
                  recommending actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Streamlined Process: Data to Insight
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From raw PMU data to actionable predictions, Matastra simplifies grid
                monitoring and enhances decision-making for preventative maintenance.
              </p>
              {/* Optional: List of steps or benefits */}
              <ul className="grid gap-2 py-4">
                 <li>
                    <IconPlaceholder className="mr-2 inline-block h-4 w-4 text-primary" />
                    Collect High-Frequency PMU Data
                 </li>
                 <li>
                    <IconPlaceholder className="mr-2 inline-block h-4 w-4 text-primary" />
                    Process and Analyze with AI Models
                 </li>
                 <li>
                    <IconPlaceholder className="mr-2 inline-block h-4 w-4 text-primary" />
                    Generate Predictive Failure Alerts
                 </li>
                  <li>
                    <IconPlaceholder className="mr-2 inline-block h-4 w-4 text-primary" />
                    Visualize Grid Health and Risks
                 </li>
              </ul>
            </div>
            {/* How It Works Visual Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="aspect-video w-full max-w-xl overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                {/* TODO: Replace with relevant diagram or illustration */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-32 w-32 text-muted-foreground/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                   <title>Data Flow Diagram Concept</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Trusted by Industry Leaders
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear how Matastra is making a difference for power grid
                  operators and enhancing overall system reliability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Testimonial Card */}
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                 <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "Matastra's predictive capabilities have significantly reduced our
                  unplanned outages. It's a game-changer for grid reliability."
                 </blockquote>
                 <footer className="text-sm font-semibold">Jane Doe, Grid Operations Manager</footer>
              </div>
              {/* Testimonial Card */}
               <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                 <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "The accuracy of the failure predictions is impressive. We can now
                  schedule maintenance proactively, saving time and resources."
                 </blockquote>
                 <footer className="text-sm font-semibold">John Smith, Utility Engineer</footer>
              </div>
              {/* Testimonial Card */}
               <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                 <blockquote className="text-sm text-muted-foreground italic mb-4">
                  "The platform is intuitive and the alerts are easy to understand.
                  Highly recommended for any modern utility aiming for resilience."
                 </blockquote>
                 <footer className="text-sm font-semibold">Alex Johnson, Head of Innovation</footer>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Enhance Grid Reliability?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Request a personalized demo or contact our team to learn how
                Matastra can help you predict and prevent power line failures.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="flex flex-col sm:flex-row justify-center gap-2 pt-4">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Request Demo
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Sales
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Get started today.
                <Link
                  href="#"
                  className="underline underline-offset-2 transition-colors hover:text-primary ml-1"
                  prefetch={false}
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Matastra Inc. All rights reserved.
              </p>
              <nav className="flex gap-4 sm:gap-6">
                <Link
                    href="#"
                    className="text-xs hover:underline underline-offset-4 text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                >
                    Privacy Policy
                </Link>
                <Link
                    href="#"
                    className="text-xs hover:underline underline-offset-4 text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                >
                    Terms of Service
                </Link>
              </nav>
          </div>
      </footer>
    </div>
  );
}
