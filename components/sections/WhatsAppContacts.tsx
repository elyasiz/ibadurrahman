import Image from 'next/image';
import { siteConfig } from '@/content/site.config';

const admissionMessage = encodeURIComponent(
  'Assalamu’alaikum, saya ingin mendapatkan informasi pendaftaran di Yayasan Ibadurrahman.',
);

export function WhatsAppContacts({ compact = false }: { compact?: boolean }) {
  return (
    <div id="kontak-whatsapp" className={`whatsapp-section ${compact ? 'is-compact' : ''}`}>
      <div className="whatsapp-heading">
        <p className="section-eyebrow">Kontak Pendaftaran</p>
        <h2>Pilih admin yang ingin Anda hubungi.</h2>
        <p>Konsultasikan pilihan jenjang dan informasi pendaftaran langsung melalui WhatsApp.</p>
      </div>
      <div className="whatsapp-grid">
        {siteConfig.admissionsContacts.map((contact) => (
          <article className="whatsapp-card" key={contact.whatsapp}>
            <div className="contact-avatar">
              <Image
                src={contact.avatar}
                alt={contact.name === 'Panitian PPDB' ? 'Foto Panitian PPDB' : 'Logo Ibadurrahman'}
                fill
                sizes="72px"
                style={{ objectPosition: contact.avatarPosition }}
              />
            </div>
            <div className="contact-identity">
              <strong>{contact.name}</strong>
              <span>{contact.phone}</span>
            </div>
            <a
              className="whatsapp-button"
              href={`https://wa.me/${contact.whatsapp}?text=${admissionMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Hubungi ${contact.name} melalui WhatsApp`}
            >
              <Image src="/assets/icons/whatsapp.svg" alt="" width={22} height={22} aria-hidden="true" />
              Hubungi via WhatsApp
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

