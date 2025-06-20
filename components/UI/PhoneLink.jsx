'use client';

export default function PhoneLink({ className }) {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(718) 871 1234';
  const phoneCode = process.env.NEXT_PUBLIC_PHONE_CODE || '+17188711234';

  return (
    <a href={`tel:${phoneCode}`} className={className}>
      {phone}
    </a>
  );
}
