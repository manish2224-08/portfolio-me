import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MessageSquare, Send, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:themanishchandel@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send!",
    });
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="section-heading">
              Let's Build Something
              <br />
              <span className="text-gradient">Great Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-3">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Your Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all group"
            >
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.form>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <a 
              href="mailto:themanishchandel@gmail.com" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>themanishchandel@gmail.com</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Schedule a call</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
