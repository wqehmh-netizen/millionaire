import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default function ApiSettingsPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="إعدادات API"
          subtitle="حفظ مفاتيح المنصة لاحقًا من خلال الخادم بشكل آمن"
        />

        <div className="glass rounded-3xl p-6 max-w-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">API Key</label>
              <input className="input-dark" type="text" placeholder="أدخل API Key" />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Secret Key</label>
              <input className="input-dark" type="password" placeholder="أدخل Secret Key" />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Server IP</label>
              <input className="input-dark" type="text" placeholder="IP الخاص بالخادم" />
            </div>

            <button className="px-6 py-3 rounded-2xl gold-btn">
              حفظ الإعدادات
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
