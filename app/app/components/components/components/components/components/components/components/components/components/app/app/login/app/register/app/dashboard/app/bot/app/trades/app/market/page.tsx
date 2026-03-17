import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import MarketCards from '@/components/MarketCards'

export default function MarketPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="السوق"
          subtitle="نظرة سريعة على حركة الأزواج والمؤشرات الأساسية"
        />
        <MarketCards />
        <div className="glass rounded-3xl p-6 mt-8 h-80 flex items-center justify-center text-gray-500">
          منطقة الرسم البياني
        </div>
      </section>
    </main>
  )
}
