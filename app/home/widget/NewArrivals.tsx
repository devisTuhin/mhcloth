"use client";

import Button from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Updated with real product IDs from andsons-products.ts
const newArrivals = [
  {
    id: "andsons-new-1",
    name: "Limited Edition Denim Jacket",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "andsons-new-2",
    name: "Vintage Workwear Overalls",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "andsons-new-3",
    name: "Heritage Wool Sweater",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "andsons-acc-2",
    name: "Vintage Leather Wallet",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop&q=80",
    isNew: true,
  },
];

/**
 * New Arrivals section showcasing latest products
 * Features animated cards with "NEW" badges and modern styling
 */
export default function NewArrivals() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              New Arrivals
            </h2>
            <Sparkles className="w-6 h-6 text-blue-600 ml-2" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh finds and latest additions to our collection. Be the first to
            discover what's new.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/shop/${product.id}`} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative cursor-pointer">
                  {/* NEW Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        NEW
                      </span>
                    </div>
                  )}

                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/shop/${product.id}`;
                        }}
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/shop?filter=new">
            <Button
              size="lg"
              className="group bg-blue-600 hover:bg-blue-700 text-white"
            >
              Shop New Arrivals
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
