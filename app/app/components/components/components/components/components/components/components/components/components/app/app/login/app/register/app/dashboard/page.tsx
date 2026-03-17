import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import StatCard from '@/components/StatCard'
import MarketCards from '@/components/MarketCards'
import TradeTable from '@/components/TradeTable'

export default function DashboardPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="لوحة التحكم"
          subtitle="متابعة الرصيد، الأداء، السوق، و Najd من مكان واحد"
        />

        <div className="grid md:grid-cols-3 gap-4">
          <StatCard title="رصيد المحفظة" value="$24,580" sub="ارتفاع 4.2% اليوم" />
          <StatCard title="الصفقات المفتوحة" value="8" sub="3 صفقات نشطة حاليًا" />
          <StatCard title="نسبة النجاح" value="76%" sub="خلال آخر 30 يوم" />
        </div>

        <div className="mt-8">
          <MarketCards />
        </div>

        <div className="mt-8">
          <TradeTable />
        </div>
      </section>
    </main>
  )
}
