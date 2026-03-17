import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import BotControl from '@/components/BotControl'

export default function BotPage() {
  return (
    <main className="min-h-screen flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-8">
        <Topbar
          title="Najd"
          subtitle="إدارة الإعدادات، الاستراتيجية، المخاطر، والأوامر"
        />

        <BotControl />
      </section>
    </main>
  )
}
