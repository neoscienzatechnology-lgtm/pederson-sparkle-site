import { Home, Building2, Sparkles, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Deep cleaning for your home with attention to every detail. Regular or one-time service available."
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning. Flexible scheduling to fit your business needs."
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive cleaning service for those areas that need extra care. Move-in/move-out specialists."
  },
  {
    icon: Calendar,
    title: "Regular Maintenance",
    description: "Scheduled cleaning services to keep your space consistently fresh and welcoming."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
