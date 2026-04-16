"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ForLeasePage() {
  const properties = [
    {
      title: "5863 Dolores St",
      address: "Houston, TX 77057",
      price: "$4500/monthly",
      desc: "Prime commercial space located in the heart of Houston, perfect for growing businesses.",
      image: "/images/building_2.png"
    },
    {
      title: "Stafford Retail Plaza",
      address: "3607 S Main Street Stafford, Texas 77477",
      size: "1575 SF",
      desc: "Excellent retail plaza location with high foot traffic and visibility.",
      image: "/images/building_3.png"
    },
    {
      title: "Stafford Hw 90 Land",
      address: "3549 S Main St Stafford, Texas 77477",
      size: "25000 SF land",
      desc: "Prime land right next to Stafford Retail Plaza and Chipotle, ready for development.",
      image: "/images/building_1.png"
    },
    {
      title: "Harwin Plaza",
      address: "6655 Harwin Drive Houston, TX 77036",
      desc: "Highly desirable location offering versatile usage options for various commercial ventures.",
      image: "/images/office.png"
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image src="/images/building_2.png" alt="For Lease" fill className="object-cover opacity-20 transform scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Properties For Lease</h1>
            <div className="w-24 h-1 bg-[#c2a990] mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-balance">
              Explore our current portfolio of prime commercial properties available for lease in the Houston area and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={prop.image} alt={prop.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full text-slate-900 shadow-sm uppercase tracking-wider">
                    For Lease
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
        </div>
      </section>
    </div>
  );
}