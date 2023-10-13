export default function SiteFooter() {
  return (
    <footer className="sticky bottom-0 border-t bg-background shadow">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center p-4 sm:flex-row md:justify-between">
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
