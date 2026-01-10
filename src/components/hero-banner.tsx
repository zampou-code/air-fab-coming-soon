import { Badge } from "./ui/badge";
import { ContactForm } from "./contact-form";
import { Navbar } from "./navbar";

export function HeroBanner() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[#2b2d83]/35 z-10 px-4 md:px-20 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full items-center justify-center grid gap-10 md:gap-4 grid-cols-1 md:grid-cols-[1fr_400px] grid-rows-1">
          <div className="text-white space-y-2 md:space-y-5">
            <Badge variant="destructive">Coming Soon!</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Our new website is on its way.
            </h2>
            <p className="text-lg">Get notified when we launch.</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
