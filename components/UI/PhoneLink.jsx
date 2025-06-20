'use client';

export default function PhoneLink({ className }) {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(267) 828-4999';
  const phoneCode = process.env.NEXT_PUBLIC_PHONE_CODE || '+12678284999';

  return (
    <a href={`tel:${phoneCode}`} className={className}>
      {phone}
    </a>
  );
}
