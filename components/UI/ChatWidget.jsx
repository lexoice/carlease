import React, { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
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
    `;
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;