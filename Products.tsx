import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import pPressure from "@/assets/p-pressure.jpg";
import pHeat from "@/assets/p-heat.jpg";
import pTank from "@/assets/p-tank.jpg";
import pProcess from "@/assets/p-process.jpg";
import pStructural from "@/assets/p-structural.jpg";
import pCustom from "@/assets/p-custom.jpg";

const products = [
  { title: "Pressure Vessels", desc: "ASME-grade vessels engineered for demanding pressure cycles.", img: pPressure },
  { title: "Heat Exchangers", desc: "Shell-and-tube and custom thermal solutions.", img: pHeat },
  { title: "Storage Tanks", desc: "Large-capacity tanks for liquids, gases, and processes.", img: pTank },
  { title: "Process Equipments", desc: "Reactors, columns, agitators and bespoke equipment.", img: pProcess },
  { title: "Structural Fabrication", desc: "Industrial structures with precision-welded integrity.", img: pStructural },
  { title: "Custom Manufacturing", desc: "Engineered to spec — from concept to commissioning.", img: pCustom },
];

export function Products() {
  return (
    <section id="products" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 lg:mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Products
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl">
              Engineered for the
              <br />
              <span className="text-gradient-gold italic font-light">industries that move the world.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A complete portfolio of fabricated equipment, manufactured to
            international standards and refined for performance.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-5">
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-card border border-border aspect-[3/4] sm:aspect-[4/5] block"
            >
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-60 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-2.5 sm:p-5 lg:p-7">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="min-w-0">
                    <div className="text-[8px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.3em] text-gold/80 mb-1.5 sm:mb-3">
                      0{i + 1} / 06
                    </div>
                    <h3 className="font-display text-sm sm:text-xl lg:text-3xl font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-sm text-muted-foreground max-w-xs leading-snug hidden sm:block">
                      {p.desc}
                    </p>
                  </div>
                  <div className="shrink-0 size-7 sm:size-9 lg:size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="size-3.5 sm:size-4 lg:size-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
