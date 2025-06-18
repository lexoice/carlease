'use client';
import { useEffect, useState } from 'react';

export default function PhoneLink({ className }) {
  const [label, setLabel] = useState('');
  const [href, setHref] = useState('');

  useEffect(() => {

    const phone = atob('KDcxOCkgODcxIDIyNzc=');
    const phoneCode = atob('KzE3MTg4NzEyMjc3');

    setLabel(phone);
    setHref(`tel:${phoneCode}`);
  }, []);

  return <a href={href} className={className}>{label}</a>;
}
