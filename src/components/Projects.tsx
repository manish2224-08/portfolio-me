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
  {
    title: "Banno Lighting",
    description: "E-commerce website offering modern lighting products with a clean shopping experience.",
    tech: ["eCommerce"],
    url: "https://bannolighting.store/",
    category: "Shopify",
  },
  {
    title: "Healthcare Rocks",
    description: "Healthcare-focused website providing wellness content, resources, and services.",
    tech: ["Healthcare"],
    url: "https://healthcarerocks.com/",
    category: "WordPress",
  },
  {
    title: "Hope for Healing Institute",
    description: "Nonprofit organization offering mental health and spiritual wellness programs.",
    tech: ["Nonprofit"],
    url: "http://www.hopeforhealinginstitute.org/",
    category: "WebStarts",
  },
  {
    title: "CSS Home Services",
    description: "Service-based business website highlighting home maintenance, repair, and installation services.",
    tech: ["Services"],
    url: "https://csshomeservices.com/",
    category: "Wordpress",
  },
  {
    title: "Xceed Plumbing Australia",
    description: "Professional plumbing service website designed for local Australian customers.",
    tech: ["Plumbing"],
    url: "https://xceedplumbing.com.au/",
    category: "WordPress",
  },
  {
    title: "Papalaya",
    description: "Modern brand website showcasing premium lifestyle products and collections.",
    tech: ["Lifestyle Brand"],
    url: "https://www.papalaya.com/",
    category: "Webflow",
  },
  {
    title: "Rise Up Consulting",
    description: "Business consulting website focusing on leadership, growth strategies, and organizational development.",
    tech: ["Consulting"],
    url: "https://riseupconsultinginc.com/",
    category: "WordPress",
  },
  {
    title: "Kimberly Ramirez Entertainment",
    description: "Portfolio and service website for an entertainment professional showcasing talent and offerings.",
    tech: ["Entertainment"],
    url: "https://www.kimberlyramirezentertainment.com/",
    category: "wix",
  },
  {
    title: "Audience Intelligence Asia",
    description: "Digital analytics and audience research website providing insight-driven solutions.",
    tech: ["Analytics"],
    url: "https://audienceintelligence.asia/",
    category: "WordPress",
  },
  {
    title: "Hancock Homes",
    description: "Real estate website for showcasing premium residential properties.",
    tech: ["Real Estate"],
    url: "https://hancockhomes.com.au/",
    category: "WordPress",
  },
  {
    title: "Titan Atlantic",
    description: "Corporate website for a business offering commercial and industrial solutions.",
    tech: ["Corporate"],
    url: "https://titan-atlantic.com/",
    category: "WordPress",
  },
  {
    title: "Oyster Elements",
    description: "Squarespace e-commerce store offering organic supplements and wellness products.",
    tech: ["Wellness"],
    url: "https://www.oysterelements.com/",
    category: "Squarespace",
  },
  {
    title: "The Realm Seer",
    description: "Personal brand website centered around spirituality, readings, and intuitive guidance.",
    tech: ["Spirituality"],
    url: "https://therealmsseer.com/",
    category: "Wordpress",
  },
  {
    title: "Team 52999",
    description: "Wix Studio website for a team or community-based project portfolio.",
    tech: ["Community"],
    url: "https://team52999.wixstudio.com/my-site/",
    category: "wix",
  },
  {
    title: "Inspired ADUS",
    description: "Webflow website for an architecture and housing solutions company specializing in ADUs.",
    tech: ["Architecture"],
    url: "https://www.inspiredadus.com/",
    category: "Webflow",
  },
  {
    title: "Shop Miventi",
    description: "A modern fashion e-commerce store offering premium apparel and accessories with a clean shopping flow.",
    tech: ["eCommerce"],
    url: "https://shopmiventi.com/",
    category: "Wordpress",
  },
  {
    title: "Tekton Building Group",
    description: "Australian construction and building services company showcasing residential and commercial projects.",
    tech: ["Construction"],
    url: "https://tektonbuildinggroup.com.au/",
    category: "WordPress",
  },
  {
    title: "A-Repair",
    description: "Professional repair service website offering appliance repair solutions with quick support and local technicians.",
    tech: ["Repair Services"],
    url: "https://a-repair.com/",
    category: "WordPress",
  },
  {
    title: "FistaFit",
    description: "Health and fitness brand website featuring wellness products, programs, and performance supplements.",
    tech: ["Fitness"],
    url: "https://fistafit.com/",
    category: "Wordpress",
  },
  {
    title: "Papalee Bali",
    description: "Hospitality and dining website representing a Bali-based restaurant and lifestyle destination.",
    tech: ["Hospitality"],
    url: "https://papaleebali.com/",
    category: "WordPress",
  },
  {
    title: "Eat Lebab",
    description: "Restaurant and food service website showcasing Middle Eastern cuisine with menus, locations, and delivery options.",
    tech: ["Restaurant"],
    url: "https://www.eatlebab.com/",
    category: "wix",
  },
  {
    title: "The Bakery",
    description: "Modern Australian bakery website offering pastries, cakes, and catering services with a stylish presentation.",
    tech: ["Bakery", "Food & Beverage"],
    url: "https://www.thebakery.com.au/",
    category: "wix",
  }
];

const filters = ["All", "WordPress", "Shopify", "Webflow", "wix", "Framer", "WebStarts"];

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
