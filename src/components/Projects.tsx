import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Couture Law P.A.",
    description: "A Florida personal injury law firm specializing in car, motorcycle, and truck accidents.",
    tech: ["WordPress", "Law"],
    url: "https://couturelawoffices.com/",
    category: "WordPress",
  },
  {
    title: "Eurobahn Dynamics",
    description: "Automotive performance parts store with optimized browsing and fast checkout experience.",
    tech: ["Shopify", "E-commerce"],
    url: "https://eurobahndynamics.com/",
    category: "Shopify",
  },
  {
    title: "Larson Shores Architects",
    description: "Modern architecture studio showcasing refined residential and commercial design.",
    tech: ["Webflow", "Architecture"],
    url: "https://www.larsonshores.com/",
    category: "Webflow",
  },
  {
    title: "Boopos",
    description: "Financial platform offering acquisition-based loans for SaaS and online businesses.",
    tech: ["Webflow", "Fintech"],
    url: "https://www.boopos.com/",
    category: "Webflow",
  },
  {
    title: "Chocobar",
    description: "Canadian craft chocolate brand with curated cacao bars and premium gifting boxes.",
    tech: ["Shopify", "E-commerce"],
    url: "https://chocobar.ca/",
    category: "Shopify",
  },
  {
    title: "Flow AI Ops",
    description: "Modern SaaS website showcasing AI-powered workflow automation tools.",
    tech: ["Framer", "SaaS"],
    url: "https://flowaiops.com/",
    category: "Framer",
  },
];

const filters = ["All", "WordPress", "Shopify", "Webflow", "Framer"];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            A selection of my recent work across various platforms and industries
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "glass hover:border-primary/50"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card group card-hover"
            >
              <div className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
