import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { projects } from "../data"

const categories = ["All", "Full Stack & Web", "Java Systems", "Android"]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "All") return true
    if (activeTab === "Full Stack & Web")
      return p.category === "Full Stack App" || p.category === "Web App" || p.category === "Website"
    if (activeTab === "Java Systems") return p.category === "Java System"
    if (activeTab === "Android") return p.category === "Android"
    return true
  })

  return (
    <section id="projects" className="section-pad mx-auto max-w-7xl">
      <SectionHeading label="// PROJECTS" title="Featured Work" />

      {/* Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => {
          const isActive = activeTab === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative rounded-full px-5 py-2 text-sm transition-all duration-300 ${
                isActive
                  ? "bg-ice text-black font-bold shadow-glow"
                  : "border border-navy-border bg-navy-card/60 text-ink-muted hover:border-ice/40 hover:text-ink font-medium"
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => {
            const hasLiveDemo = p.live && p.live !== p.repo
            return (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass group flex flex-col rounded-xl p-6 transition-all hover:-translate-y-1.5 hover:border-ice/50 hover:shadow-glow-lg"
              >
                {/* Project Image */}
                {p.image && (
                  <div className="relative mb-5 overflow-hidden rounded-lg border border-navy-border bg-navy-deep aspect-video">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-ice/40 bg-ice/10 px-3 py-1 text-xs font-semibold text-ice">
                    {p.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub Repository"
                      aria-label={`${p.title} source code`}
                      className="flex items-center gap-1.5 rounded-lg border border-navy-border bg-navy-card px-3 py-1.5 text-xs font-semibold text-ink-muted transition-all hover:border-ice/50 hover:text-ink"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                    {hasLiveDemo && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        title="View Live Site"
                        aria-label={`${p.title} live demo`}
                        className="flex items-center gap-1.5 rounded-lg bg-ice px-3.5 py-1.5 text-xs font-bold text-black shadow-glow transition-all hover:brightness-110 hover:scale-[1.02] active:scale-95"
                      >
                        <ExternalLink size={15} className="stroke-[2.5]" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-navy-border bg-navy-card px-2.5 py-1 text-xs font-medium text-ice"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

