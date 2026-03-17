const items = [
  { pair: 'BTC/USDT', price: '$67,245', change: '+2.11%' },
  { pair: 'ETH/USDT', price: '$3,522', change: '+1.27%' },
  { pair: 'BNB/USDT', price: '$611', change: '-0.34%' },
  { pair: 'SOL/USDT', price: '$154', change: '+3.85%' },
]

export default function MarketCards() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.pair} className="glass rounded-3xl p-5">
          <p className="text-sm text-gray-400">{item.pair}</p>
          <h3 className="text-2xl font-bold mt-3">{item.price}</h3>
          <p
            className={`mt-2 font-semibold ${
              item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {item.change}
          </p>
        </div>
      ))}
    </div>
  )
}
