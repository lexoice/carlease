import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon.png" rel="shortcut icon" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                window.$zopim || (function(d, s) {
                  var z = $zopim = function(c) {
                    z._.push(c)
                  },
                  $ = z.s = d.createElement(s),
                  e = d.getElementsByTagName(s)[0];
                  z.set = function(o) {
                    z.set._.push(o)
                  };
                  z._ = [];
                  z.set._ = [];
                  $.async = !0;
                  $.setAttribute('charset', 'utf-8');
                  $.src = '//v2.zopim.com/?3qAPIc9GuejgNw39FMermZNLtKuAiBJg';
                  z.t = +new Date;
                  $.type = 'text/javascript';
                  e.parentNode.insertBefore($, e)
                })(document, 'script');
              }, 2000);
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 