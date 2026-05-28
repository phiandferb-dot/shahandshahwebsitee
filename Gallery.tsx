import { motion } from "framer-motion";

const photos: { src: string; alt: string }[] = [
  { src: "/archival/metal-grinding.jpeg", alt: "Metal grinding detail" },
  { src: "/archival/storage-tank.jpeg", alt: "Storage tank in workshop" },
  { src: "/archival/welding-in-progress.png", alt: "Welding in progress" },
  { src: "/archival/workshop-inspection.png", alt: "Workshop inspection" },
  { src: "/archival/vessel-welding.jpeg", alt: "Vessel welding" },
  { src: "/archival/steel-structure.jpeg", alt: "Steel structure fabrication" },
  { src: "/archival/fabricated-parts.jpeg", alt: "Fabricated metal parts" },
  { src: "/archival/heat-exchanger.jpeg", alt: "Heat exchanger assembly" },
];

export function Gallery() {
  return (
    <section id="work" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 text-xs tracking-[0.3em] text-primary uppercase"
          >
            <span className="h-px w-10 bg-primary/60" />
            Archival
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight"
          >
            <span className="italic text-primary">Built to spec.</span>
            <br />
            Built to last.
          </motion.h2>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-sm bg-muted/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] brightness-75 group-hover:brightness-90"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
