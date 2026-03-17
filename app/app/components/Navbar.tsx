import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="px-6 md:px-10 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl gold-btn flex items-center justify-center text-lg">
          M
        </div>
        <div>
          <h1 className="text-2xl font-bold">Millionaire</h1>
          <p className="text-sm text-gray-400">طريقك للثراء يبدأ بخطوة</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/login" className="px-4 py-2 rounded-xl soft-border hover:bg-white/5">
          تسجيل الدخول
        </Link>
        <Link href="/register" className="px-4 py-2 rounded-xl gold-btn">
          ابدأ الآن
        </Link>
      </div>
    </nav>
  )
}
