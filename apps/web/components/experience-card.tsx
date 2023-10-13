interface ExperienceCardProps {
  year: number
  items: string[]
}

export default function ExperienceCard({ year, items }: ExperienceCardProps) {
  return (
    <section className="flex gap-x-4">
      <header className="font-bold w-[65px]">{year}年</header>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  )
}
