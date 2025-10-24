import { CheckCircle2 } from "lucide-react";

const features = [
  "Family-owned and operated",
  "Fully insured and bonded",
  "Eco-friendly cleaning products",
  "Experienced and trained staff",
  "Flexible scheduling",
  "100% satisfaction guarantee"
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose Pederson Team Clean?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Serving the Seattle area with pride and dedication, we're committed to 
              delivering exceptional cleaning services that exceed your expectations. 
              Our team treats every home and office as if it were our own.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-secondary opacity-20 absolute inset-0 blur-3xl" />
            <div className="relative bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">1000+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
