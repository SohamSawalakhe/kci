"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ForSalePage() {
  const activeProperties = [
    {
      title: "5863 Dolores St",
      address: "Houston, TX 77057",
      price: "$550,000",
      desc: "Outstanding commercial opportunity located in Houston.",
      image: "/images/building_3.png"
    },
    {
      title: "Stafford Hw 90 Pad Site",
      address: "3549 S Main St Stafford, Texas 77477",
      size: "25000 SF",
      desc: "Next to Stafford Retail Plaza and Chipotle. Perfect for high-visibility commercial development.",
      image: "/images/building_1.png"
    }
  ];

  const soldProperties = [
    {
      title: "Stafford Hw 90 Pad Site",
      address: "3549 S Main St Stafford, TX 77477",
      size: "29500 SF land",
      desc: "Successfully closed."
    },
    {
      title: "The Shops at Telfair",
      address: "12920 University Blvd Sugar Land, TX 77479",
      size: "16169 SF Retail Center",
      desc: "Prime retail center, successfully closed."
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image src="/images/building_1.png" alt="For Sale" fill className="object-cover opacity-20 transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Properties For Sale</h1>
            <div className="w-24 h-1 bg-[#c2a990] mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
              Discover unparalleled commercial real estate investment opportunities spanning Houston and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-4">
            <span className="w-10 h-1 bg-[#905e0e] block rounded-full" />
            Available Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {activeProperties.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image src={prop.image} alt={prop.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-sm uppercase tracking-wider">
                    For Sale
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{prop.title}</h3>
                  <div className="flex items-start gap-2 text-slate-500 mb-6">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#905e0e]" />
                    <p>{prop.address}</p>
                  </div>
                  <p className="text-slate-600 mb-8 flex-grow">{prop.desc}</p>

                  <div className="flex justify-between items-center pt-6 border-t border-slate-100 mt-auto">
                    <div className="font-semibold text-[#905e0e] text-lg">
                      {prop.price || prop.size}
                    </div>
                    <Link href="/contact" className="flex items-center text-sm font-medium text-slate-900 hover:text-[#905e0e] transition-colors">
                      Inquire <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 flex items-center gap-4">
              <span className="w-10 h-1 bg-[#c2a990] block rounded-full" />
              Recently Sold
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {soldProperties.map((prop, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow border border-slate-100 flex flex-col sm:flex-row gap-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-slate-50 rounded-full opacity-50" />
                  <div className="bg-slate-100 p-4 rounded-xl flex-shrink-0 self-start">
                    <CheckCircle2 className="w-8 h-8 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{prop.title}</h3>
                    <p className="text-sm font-medium text-[#905e0e] mb-3">{prop.size}</p>
                    <div className="flex items-start gap-2 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>{prop.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}