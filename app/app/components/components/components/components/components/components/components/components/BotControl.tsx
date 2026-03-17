export default function BotControl() {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm text-gray-400">الاسم</p>
          <h2 className="text-3xl font-bold gold-text mt-2">Najd</h2>
        </div>
        <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
          Active
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div>
          <label className="block text-sm text-gray-400 mb-2">زوج التداول</label>
          <select className="input-dark">
            <option>BTC/USDT</option>
            <option>ETH/USDT</option>
            <option>SOL/USDT</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">نمط الاستراتيجية</label>
          <select className="input-dark">
            <option>Smart Trend</option>
            <option>Scalping</option>
            <option>Swing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">وقف الخسارة %</label>
          <input className="input-dark" type="number" defaultValue={2} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">جني الأرباح %</label>
          <input className="input-dark" type="number" defaultValue={4} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">نسبة المخاطرة %</label>
          <input className="input-dark" type="number" defaultValue={1} />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">الحد الأقصى للصفقات</label>
          <input className="input-dark" type="number" defaultValue={3} />
        </div>
      </div>

      <div className="flex gap-4 mt-8 flex-wrap">
        <button className="px-6 py-3 rounded-2xl bg-emerald-500 text-black font-bold">
          تشغيل
        </button>
        <button className="px-6 py-3 rounded-2xl border border-red-500/30 text-red-400">
          إيقاف
        </button>
        <button className="px-6 py-3 rounded-2xl soft-border hover:bg-white/5">
          حفظ الإعدادات
        </button>
      </div>
    </div>
  )
}
