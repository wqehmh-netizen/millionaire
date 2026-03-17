export default function StatCard({
  title,
  value,
  sub,
}: {
  title: string
  value: string
  sub: string
}) {
  return (
    <div className="glass rounded-3xl p-5">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-3xl font-bold mt-3">{value}</h3>
      <p className="text-sm text-gray-500 mt-2">{sub}</p>
    </div>
  )
}
