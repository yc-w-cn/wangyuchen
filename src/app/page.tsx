import Image from "next/image"

export default function IndexPage() {
  return (
    <section className="mx-auto flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-y-10 sm:flex-row">
      <div className="px-10">
        <Image src="/images/avatar.png" width={200} height={200} alt="Avatar" />
      </div>
      <div className="flex flex-col items-center gap-2 sm:items-start">
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Yuchen Wang
        </h1>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl">
          全栈软件工程师
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          探索前沿技术为业务赋能
        </p>
      </div>
    </section>
  )
}
