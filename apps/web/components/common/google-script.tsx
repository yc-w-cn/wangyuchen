import Script from "next/script";

export default function GoogleScript() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-W6PFHTBF" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-W6PFHTBF');
        `}
      </Script>
    </>
  );
}
