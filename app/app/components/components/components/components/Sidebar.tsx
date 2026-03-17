import Link from 'next/link'

const links = [
  { name: 'لوحة التحكم', href: '/dashboard' },
  { name: 'Najd', href: '/bot' },
  { name: 'الصفقات', href: '/trades' },
  { name: 'السوق', href: '/market' },
  { name: 'إعدادات API', href: '/api-settings' },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-72 p-6 border-l border-white/10">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl gold-btn flex items-center justify-center font-bold">
          M
        </div>
        <div>
          <h2 className="text-xl font-bold">Millionaire</h2>
          <p className="text-xs text-gray-400">طريقك للثراء يبدأ بخطوة</p>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl px-4 py-3 hover:bg-white/5 soft-border transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="mt-auto glass rounded-3xl p-4">
        <p className="text-sm text-gray-400">النظام الحالي</p>
        <h3 className="text-2xl font-bold gold-text mt-2">Najd</h3>
        <p className="text-sm text-gray-500 mt-2">تحليل وإدارة تداول احترافية</p>
      </div>
    </aside>
  )
}
