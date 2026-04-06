import { motion } from "motion/react";
import { Lock, ExternalLink, ShieldCheck, AlertCircle, Database, Search, BookOpen, FileText } from "lucide-react";

const projects = [
  {
    title: "Security Audit",
    description: "Conducted a controls and compliance assessment and provided recommendations to company stakeholders to mitigate risks and avoid fines based on best practices for NIST CSF, PCI DSS, GDPR, SOC 1 & SOC 2.",
    icon: ShieldCheck,
    status: "In Progress",
    locked: true,
  },
  {
    title: "Incident Report",
    description: "Identified DDoS attack, scope of incident, potential network vulnerabilities and protection measures, and properly documented analysis and recovery plans in order to restore normal operations and maintain alignment with NIST CSF best practices.",
    icon: AlertCircle,
    status: "In Progress",
    locked: true,
  },
  {
    title: "SQL Query",
    description: "Developing complex SQL queries for data analysis and security monitoring in BigQuery and MySQL environments.",
    icon: Database,
    status: "In Progress",
    locked: true,
  },
  {
    title: "Vulnerability Assessment",
    description: "Performing comprehensive vulnerability scans and risk assessments to identify and prioritize security weaknesses.",
    icon: Search,
    status: "In Progress",
    locked: true,
  },
  {
    title: "TryHackMe Journal",
    description: "Completed 17 TryHackMe rooms, gaining hands-on skills in Linux and Windows fundamentals, log analysis, network troubleshooting with Wireshark, and incident handling with Splunk.",
    icon: BookOpen,
    status: "Completed",
    link: "https://docs.google.com/document/d/1l081r6t5fvgtX-h3fn2DrDq3A27JOmzI9WEAozvAxRE/edit?tab=t.0",
    locked: false,
  },
  {
    title: "Incident Handlers Journal",
    description: "Documenting incident response procedures and lessons learned from simulated security breaches.",
    icon: FileText,
    status: "In Progress",
    locked: true,
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">
          02. PORTFOLIO<span className="text-cyber-green">_</span>
        </h2>
        <div className="h-px flex-1 bg-cyber-green/20"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`cyber-border p-8 bg-cyber-gray/50 backdrop-blur-sm group hover:border-cyber-green/60 transition-all ${
              project.locked ? "opacity-80" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyber-green/10 rounded-lg">
                <project.icon className="w-6 h-6 text-cyber-green" />
              </div>
              {project.locked ? (
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyber-blue uppercase tracking-widest border border-cyber-blue/30 px-2 py-1">
                  <Lock className="w-3 h-3" />
                  Encrypted
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-green hover:text-cyber-blue transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-cyber-green transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-cyber-green/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Status: <span className={project.locked ? "text-cyber-blue" : "text-cyber-green"}>{project.status}</span>
              </span>
              {project.locked && (
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600 italic">
                  &gt; Access Denied
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
