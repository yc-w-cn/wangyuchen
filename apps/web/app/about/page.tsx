import ExperienceCard from "@/components/experience-card"

export default function AboutPage() {
  return (
    <section className="mx-auto flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-y-10 py-5">
      <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        关于我
      </h1>
      <div className="text-md flex flex-col gap-y-2">
        <ExperienceCard
          year={2020}
          items={["老友记智慧助老服务中心 · 研发总监"]}
        />
        <ExperienceCard
          year={2018}
          items={["IP&U · 组织创新与变革 · 讲演嘉宾"]}
        />
        <ExperienceCard
          year={2017}
          items={["阿仁加速器 · 首席智能官"]}
        />
        <ExperienceCard
          year={2014}
          items={["上海财经大学 · 年度人物"]}
        />
        <ExperienceCard
          year={2012}
          items={["全国 · 服务外包创新创业大赛 · 一等奖", "上海 · 创新创业大赛 · 优胜团队"]}
        />
        <ExperienceCard
          year={2011}
          items={["全国 · 挑战杯创业计划大赛 · 金奖", "全国 · 计算机设计大赛 · 一等奖"]}
        />
      </div>
    </section>
  )
}
