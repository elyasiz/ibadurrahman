'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setStatus('error'); form.reportValidity(); return; }
    setStatus('loading');
    window.setTimeout(() => { setStatus('success'); form.reset(); }, 700);
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-field"><label htmlFor="name">Nama</label><input id="name" name="name" required autoComplete="name" /></div>
      <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="form-field"><label htmlFor="phone">Nomor telepon</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
      <div className="form-field"><label htmlFor="subject">Keperluan</label><select id="subject" name="subject"><option>Informasi program</option><option>Pendaftaran santri</option><option>Kunjungan</option><option>Lainnya</option></select></div>
      <div className="form-field form-field-full"><label htmlFor="message">Pesan</label><textarea id="message" name="message" required /></div>
      {status === 'error' ? <p className="form-status" role="alert">Mohon lengkapi semua data dengan benar.</p> : null}
      {status === 'success' ? <p className="form-status" role="status">Terima kasih. Pesan Anda sudah tercatat pada demo formulir ini.</p> : null}
      <button className="button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Mengirim…' : 'Kirim Pesan'}</button>
    </form>
  );
}
