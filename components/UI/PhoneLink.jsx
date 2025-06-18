'use client';
import { useEffect, useState } from 'react';

export default function PhoneLink({ className }) {
  const [label, setLabel] = useState('');
  const [href, setHref] = useState('');

  useEffect(() => {
    const handleActivity = () => {
      const phone = atob('KDcxOCkgODcxIDIyNzc=');
      const phoneCode = atob('KzE3MTg4NzEyMjc3');

      setLabel(phone);
      setHref(`tel:${phoneCode}`);

      // Убираем слушатели, чтобы не срабатывало повторно
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };

    // Добавляем слушатели активности
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('touchstart', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, []);

  return (
    <a href={href || '#'} className={className}>
      {label || 'Click to call'}
    </a>
  );
}
