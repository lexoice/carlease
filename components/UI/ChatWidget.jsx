'use client';
import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    let triggered = false;

    const loadZopim = () => {
      if (triggered) return;
      triggered = true;

      setTimeout(() => {
        const script = document.createElement('script');
        script.src = '//v2.zopim.com/?3qAPIc9GuejgNw39FMermZNLtKuAiBJg';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);
      }, 1000);
    };

    // Слушаем взаимодействия
    window.addEventListener('mousemove', loadZopim, { once: true });
    window.addEventListener('touchstart', loadZopim, { once: true });
    window.addEventListener('keydown', loadZopim, { once: true });

    return () => {
      window.removeEventListener('mousemove', loadZopim);
      window.removeEventListener('touchstart', loadZopim);
      window.removeEventListener('keydown', loadZopim);
    };
  }, []);

  return null;
};

export default ChatWidget;
