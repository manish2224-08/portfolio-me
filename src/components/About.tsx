import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Expert in PHP, JavaScript, HTML, CSS, jQuery with deep CMS expertise",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating visually polished and high-converting digital experiences",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Performance-focused builds that load fast and rank higher",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Delivering flexible, scalable solutions tailored to your needs",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="section-heading">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 6 years of experience, I am a Full Stack Developer and Web Designer 
                focused on building fast, high-converting, and visually polished digital experiences.
              </p>
              <p>
                I specialize in CMS development across Webflow, Shopify, WordPress, Wix, SquareSpace, 
                and Framer — delivering flexible and scalable solutions that help businesses grow.
              </p>
              <p>
                I also bring strong skills in automation workflows including email automations, 
                CRM integrations, and API-based systems.
              </p>
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
