import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default function AdminPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />
      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="لوحة الإدارة"
          subtitle="إدارة المستخدمين ومتابعة المنصة"
        />

        <div className="glass rounded-3xl p-6 overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="pb-4">الاسم</th>
                <th className="pb-4">البريد</th>
                <th className="pb-4">الخطة</th>
                <th className="pb-4">الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-4">محمد</td>
                <td className="py-4">m@example.com</td>
                <td className="py-4">Pro</td>
                <td className="py-4 text-emerald-400">نشط</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4">سعود</td>
                <td className="py-4">s@example.com</td>
                <td className="py-4">Basic</td>
                <td className="py-4 text-yellow-400">معلق</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
