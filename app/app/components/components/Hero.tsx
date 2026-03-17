import Link from 'next/link'

export default function Hero() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-24 grid-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="gold-text font-semibold mb-3">منصة تداول احترافية</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Millionaire
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Your path to wealth begins with one step
          </p>
          <p className="mt-3 text-lg text-gray-400 leading-8">
            طريقك للثراء يبدأ بخطوة. واجهة أنيقة، تحكم كامل، إدارة مخاطر، وتجربة تداول مرتبة واحترافية.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="px-6 py-3 rounded-2xl gold-btn">
              إنشاء حساب
            </Link>
            <Link href="/dashboard" className="px-6 py-3 rounded-2xl soft-border hover:bg-white/5">
              دخول اللوحة
            </Link>
          </div>
        </div>

        <div className="glass-strong rounded-[28px] p-6 shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-sm text-gray-400">الأداء اليومي</p>
              <h3 className="text-3xl font-bold text-emerald-400 mt-2">+12.6%</h3>
            </div>
            <div className="rounded-2xl p-5 bg-yellow-500/10 border border-yellow-500/20">
              <p className="text-sm text-gray-400">النظام النشط</p>
              <h3 className="text-3xl font-bold gold-text mt-2">Najd</h3>
            </div>
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10 col-span-2">
              <p className="text-sm text-gray-400">ملخص المنصة</p>
              <h3 className="text-xl font-semibold mt-2 leading-8">
                تحليل لحظي، صفقات منظمة، تنبيهات، وواجهة مصممة لتكون هادئة وسريعة وواضحة.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
