export const site = {
  name: 'Aneta Wujkowska — Ekspert Finansowy',
  shortName: 'anetawujkowska.pl',
  domain: 'anetawujkowska.pl',
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://anetawujkowska.pl',
  description:
    'Aneta Wujkowska — ekspert finansowy z Ostrowi Mazowieckiej. Kredyty hipoteczne, gotówkowe, konsolidacyjne i dla rolników. Porównanie ofert wielu banków, pomoc na każdym etapie, bez opłat od klienta.',
  locale: 'pl-PL',
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  ogImage: '/assets/og-image.jpg',
  contact: {
    phone: '+48668551679',
    phoneLabel: '668 551 679',
    email: 'awujkowska.finanse@gmail.com',
    addressLine: 'ul. 3 maja 49 lok b',
    postalCity: '07-300 Ostrów Mazowiecka',
    hours: 'Pon–Pt 09:00–17:00',
  },
  company: {
    legalName: 'Pośrednictwo Finansowe Aneta Wujkowska',
    nip: '7591593187',
    regon: '382660364',
    registeredAddress: 'Sarnia 15, 07-310 Komorowo',
  },
  nav: [
    { href: '/#o-mnie', label: 'O mnie' },
    { href: '/#kredyty', label: 'Kredyty' },
    { href: '/#proces', label: 'Jak pracuję' },
    { href: '/#kontakt', label: 'Kontakt' },
  ] as const,
};
