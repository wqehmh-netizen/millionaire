export default function Topbar({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </div>
  )
}
