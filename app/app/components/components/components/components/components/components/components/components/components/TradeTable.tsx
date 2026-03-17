const trades = [
  { pair: 'BTC/USDT', side: 'شراء', price: '66210', pnl: '+125.20' },
  { pair: 'ETH/USDT', side: 'بيع', price: '3510', pnl: '-20.80' },
  { pair: 'SOL/USDT', side: 'شراء', price: '149.8', pnl: '+44.00' },
]

export default function TradeTable() {
  return (
    <div className="glass rounded-3xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">آخر الصفقات</h2>

      <table className="w-full text-right">
        <thead>
          <tr className="border-b border-white/10 text-gray-400">
            <th className="pb-4">الزوج</th>
            <th className="pb-4">النوع</th>
            <th className="pb-4">سعر الدخول</th>
            <th className="pb-4">الربح/الخسارة</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index} className="border-b border-white/5">
              <td className="py-4">{trade.pair}</td>
              <td className="py-4">{trade.side}</td>
              <td className="py-4">{trade.price}</td>
              <td className={`py-4 font-bold ${trade.pnl.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                {trade.pnl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
