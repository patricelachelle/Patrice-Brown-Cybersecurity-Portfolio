import { motion } from "motion/react";
import { User, MapPin, Briefcase, GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">
          01. ABOUT<span className="text-cyber-green">_</span>
        </h2>
        <div className="h-px flex-1 bg-cyber-green/20"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 border border-cyber-green/20 rounded-lg group-hover:border-cyber-green/40 transition-all"></div>
            <div className="relative bg-cyber-gray/50 p-8 cyber-border">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a dedicated career-changer transitioning into the world of Cybersecurity with over a decade of experience working in data-sensitive, compliance-driven environments across education, healthcare, insurance, and social services.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Currently completing intensive professional development with Merit America, focusing on the Google Cybersecurity Professional Certificate and several hands-on technical projects.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-gray-500">
                  <MapPin className="w-5 h-5 text-cyber-green/50" />
                  <span className="text-xs font-mono uppercase tracking-widest">McComb, MS</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Briefcase className="w-5 h-5 text-cyber-green/50" />
                  <span className="text-xs font-mono uppercase tracking-widest">Merit America</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <GraduationCap className="w-5 h-5 text-cyber-green/50" />
                  <span className="text-xs font-mono uppercase tracking-widest">Google Cert</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <User className="w-5 h-5 text-cyber-green/50" />
                  <span className="text-xs font-mono uppercase tracking-widest">Cyber Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="p-6 bg-cyber-green/5 border-l-4 border-cyber-green">
            <h4 className="text-cyber-green font-mono text-sm uppercase tracking-widest mb-2 font-bold">
              &gt; Mission Statement
            </h4>
            <p className="text-gray-300 italic leading-relaxed">
              "To leverage my extensive background in compliance and data sensitivity to protect organizational assets and maintain the integrity of critical information systems."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Problem-Solving", value: "95%" },
              { label: "Collaboration", value: "90%" },
              { label: "Attention to Detail", value: "98%" },
              { label: "Pressure Handling", value: "92%" },
            ].map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-gray-500">
                  <span>{skill.label}</span>
                  <span>{skill.value}</span>
                </div>
                <div className="h-1 bg-cyber-gray w-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full bg-cyber-green"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
