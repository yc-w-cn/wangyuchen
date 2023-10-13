export default function SiteFooter() {
  return (
    <footer className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <a
          href="https://beian.miit.gov.cn/"
          className="text-sm text-gray-500 hover:underline "
          target="_blank"
          rel="noreferrer"
        >
          沪ICP备11003724号-1
        </a>
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://wangyuchen.cn/" className="hover:underline">
            Yuchen Wang
          </a>{" "}
          版权所有{" "}
        </span>
      </div>
    </footer>
  )
}
