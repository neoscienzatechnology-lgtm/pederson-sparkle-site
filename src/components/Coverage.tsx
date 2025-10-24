import { MapPin } from "lucide-react";

const areas = [
  "Downtown Seattle",
  "Capitol Hill",
  "Queen Anne",
  "Ballard",
  "Fremont",
  "Green Lake",
  "Wallingford",
  "University District",
  "Bellevue",
  "Redmond",
  "Kirkland",
  "Mercer Island"
];

const Coverage = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Serving Seattle & Beyond
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly providing top-quality cleaning services throughout the greater Seattle area
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
              >
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Don't see your area? <span className="text-primary font-semibold">Contact us</span> – we may still be able to help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
