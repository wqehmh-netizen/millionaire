import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarketCards from '@/components/MarketCards'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">نظرة على السوق</h3>
            <p className="text-gray-400 mt-2">عرض سريع لأهم الأزواج داخل المنصة</p>
          </div>

          <MarketCards />
        </div>
      </section>

      <section className="px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto glass rounded-[30px] p-8 md:p-10">
          <h3 className="text-3xl font-bold">لماذا Millionaire؟</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="rounded-3xl bg-white/5 p-5 soft-border">
              <h4 className="text-xl font-bold">تصميم أنيق</h4>
              <p className="text-gray-400 mt-3 leading-7">
                واجهات مرتبة، سريعة، ومريحة للعين.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 soft-border">
              <h4 className="text-xl font-bold">Najd</h4>
              <p className="text-gray-400 mt-3 leading-7">
                تحكم واضح في الاستراتيجية، المخاطر، والإشارات.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5 soft-border">
              <h4 className="text-xl font-bold">جاهزية للتوسع</h4>
              <p className="text-gray-400 mt-3 leading-7">
                بنية مناسبة لاحقًا لربط Binance والمستخدمين الحقيقيين.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
