import Link from "next/link"
import Image from "next/image"

export default function Promotions() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large Banner */}
          <div className="relative h-[400px] lg:h-full overflow-hidden rounded-lg group">
            <div className="absolute inset-0 bg-black">
              <Image
                src="/homepage/shop-now.jpeg"
                alt="Items on Sale"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="relative h-full p-8 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-4">Items on SALE</h2>
              <p className="text-xl text-white mb-6">
                Grab the best deals on handmade products crafted with love.
              </p>
              <Link
                href="/sign-up"
                className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors w-fit"
              >
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* Right Column Banners */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {/* Top Banner */}
            <div className="relative overflow-hidden rounded-lg bg-[#47B5FF] group">
              <div className="absolute inset-0">
                <Image
                  src="/homepage/sale1.jpeg"
                  alt="Combo offers"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Combo offers</h2>
                <p className="text-xl text-white mb-6">
                  Explore exclusive bundles specially curated for festive gifting.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors w-fit"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="relative overflow-hidden rounded-lg bg-[#06B6D4] group">
              <div className="absolute inset-0">
                <Image
                  src="/homepage/discount.jpeg"
                  alt="Discount Coupons"
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Discount Coupons</h2>
                <p className="text-xl text-white mb-6">
                  Enjoy additional savings with exclusive coupons for your next purchase.
                </p>
                <Link
                  href="/sign-up"
                  className="inline-block bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors w-fit"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
