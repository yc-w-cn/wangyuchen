import Image from "next/image"

export default function ContactPage() {
  return (
    <section className="mx-auto flex h-[calc(100vh-120px)] flex-col items-center justify-center gap-y-10 py-5">
      <div className="text-md flex flex-col gap-y-2">
        <Image src="/images/qrcode.jpg" width={300} height={300} alt="wx: joydragon"  />
        <span className="text-center text-sm font-bold text-gray-500">扫一扫上面的二维码图案，加我为朋友</span>
      </div>
    </section>
  )
}
