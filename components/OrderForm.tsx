import React, { useState } from 'react';
import { Language } from '../types';

interface OrderFormProps {
  language: Language;
}

const STRINGS: Record<Language, {
  title: string;
  name: string;
  address: string;
  phone: string;
  quantity: string;
  submit: string;
  success: string;
  error: string;
}> = {
  ar: {
    title: 'أرسل طلبك الآن',
    name: 'الاسم الكامل',
    address: 'العنوان',
    phone: 'رقم الهاتف',
    quantity: 'الكمية',
    submit: 'إرسال الطلب',
    success: '✅ تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.',
    error: '❌ حدث خطأ، حاول مرة أخرى.',
  },
  en: {
    title: 'Order Now',
    name: 'Full Name',
    address: 'Address',
    phone: 'Phone Number',
    quantity: 'Quantity',
    submit: 'Send Order',
    success: '✅ Your order has been sent! We will contact you soon.',
    error: '❌ An error occurred, please try again.',
  }
};

// Endpoint resolution: prefer env var, fallback to provided Apps Script URL
const ORDER_ENDPOINT = (import.meta as any).env?.VITE_ORDER_ENDPOINT 
  || 'https://script.google.com/macros/s/AKfycbxRokSOq08Nn_tZnAxJRX-IDdqsR6U4GAJO7N-UxxNAEL7YHEoi_l6ADmoc3BlEbghM/exec';

export const OrderForm: React.FC<OrderFormProps> = ({ language }) => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState(false);

  const t = STRINGS[language];

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Simple spam protection: ignore if honeypot has value
    if ((formData.get('website') as string | null)?.length) {
      return;
    }

    const payload = {
      name: (formData.get('name') as string || '').trim(),
      address: (formData.get('address') as string || '').trim(),
      phone: (formData.get('phone') as string || '').trim(),
      quantity: Number(formData.get('quantity') || 1)
    };

    // Basic client-side validation
    if (!payload.name || !payload.address || !payload.phone || !payload.quantity) {
      setIsError(true);
      setMessage(t.error);
      return;
    }

    try {
      setSubmitting(true);
      setIsError(false);
      setMessage('');

      const res = await fetch(ORDER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'cors'
      });
      let ok = res.ok;
      // Attempt to read JSON and check `success` per provided API contract
      try {
        const result = await res.json();
        if (typeof result?.success !== 'undefined') {
          ok = Boolean(result.success);
        }
      } catch {
        // If not JSON, fall back to HTTP status
      }

      if (!ok) throw new Error('Order submission failed');

      setMessage(t.success);
      setIsError(false);
      form.reset();
    } catch (err) {
      setIsError(true);
      setMessage(language === 'ar' ? '⚠️ فشل الاتصال بالخادم، تأكد من وجود الإنترنت.' : '⚠️ Failed to connect, please check your internet.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-dark text-center mb-8">
          {t.title}
        </h2>
        <form id="orderForm" onSubmit={onSubmit} className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-[#f7f9fa] font-cairo">
          {/* Honeypot field */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-1 gap-3">
            <label className="text-sm font-semibold">{t.name}</label>
            <input name="name" placeholder={language === 'ar' ? 'اكتب اسمك الكامل' : 'Enter your full name'} required className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green" />

            <label className="text-sm font-semibold">{t.address}</label>
            <input name="address" placeholder={language === 'ar' ? 'مثال: الجزائر العاصمة، باب الزوار' : 'e.g., Algiers, Bab Ezzouar'} required className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green" />

            <label className="text-sm font-semibold">{t.phone}</label>
            <input name="phone" placeholder={language === 'ar' ? '05xxxxxxxx' : '05xxxxxxxx'} required inputMode="tel" className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green" />

            <label className="text-sm font-semibold">{t.quantity}</label>
            <input name="quantity" type="number" min={1} placeholder={language === 'ar' ? '1' : '1'} required className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green" />

            <button id="submitBtn" type="submit" disabled={submitting} className="w-full bg-[#48b379] text-white px-4 py-3 rounded-lg text-base font-semibold hover:bg-[#3ca36b] transition disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? (language === 'ar' ? 'جارٍ إرسال الطلب...' : 'Sending order...') : t.submit}
            </button>
          </div>

          <p id="msg" style={{ marginTop: 10, display: message ? 'block' : 'none', color: isError ? 'red' : 'green' }} className="mt-4 text-center">
            {message}
          </p>

          {/* Note: Ensure your Google Apps Script is deployed with doPost handler
              returning proper CORS headers. Example:
              function doPost(e) {
                return ContentService.createTextOutput(JSON.stringify({ ok: true }))
                  .setMimeType(ContentService.MimeType.JSON);
              }
          */}
        </form>
      </div>
    </section>
  );
};

export default OrderForm;