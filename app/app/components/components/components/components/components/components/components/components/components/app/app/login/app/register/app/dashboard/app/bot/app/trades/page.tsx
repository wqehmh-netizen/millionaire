import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import TradeTable from '@/components/TradeTable'

export default function TradesPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="الصفقات"
          subtitle="متابعة كل صفقات الشراء والبيع بشكل واضح ومنظم"
        />
        <TradeTable />
      </section>
    </main>
  )
}
