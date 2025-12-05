import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'wedding',
  title: 'Undangan Pernikahan',
  type: 'document',
  groups: [
    { name: 'pengaturan', title: '⚙️ Pengaturan' },
    { name: 'mempelai', title: '👰🤵 Mempelai' },
    { name: 'acara', title: '📅 Acara' },
    { name: 'galeri', title: '📷 Galeri' },
    { name: 'kado', title: '🎁 Kado' },
  ],
  fields: [
    // --- GROUP 1: PENGATURAN ---
    defineField({
      name: 'slug',
      title: 'Link Undangan (URL)',
      type: 'slug',
      options: {
        source: (doc: any) => `${doc.priaNickname}-${doc.wanitaNickname}`,
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: 'pengaturan',
    }),
    defineField({
      name: 'theme',
      title: 'Pilih Tema Desain',
      type: 'string',
      options: {
        list: [
          { title: 'Simple Elegant (Putih)', value: 'simple' },
          { title: 'Jawa Klasik (Cokelat)', value: 'jawa' },
          { title: 'Rustic Modern (Cokelat)', value: 'rustic' },
          { title: 'Elegant Floral (Bunga)', value: 'floral' },
          { title: 'Trial / Percobaan', value: 'trial' },
        ],
      },
      initialValue: 'simple',
      group: 'pengaturan',
    }),
    defineField({
      name: 'nameOrder',
      title: 'Urutan Tampilan Nama',
      type: 'string',
      description: 'Siapa yang namanya muncul duluan di undangan?',
      options: {
        list: [
          { title: 'Pria Dahulu (Andi & Siti)', value: 'priaFirst' },
          { title: 'Wanita Dahulu (Siti & Andi)', value: 'wanitaFirst' },
        ],
      },
      initialValue: 'priaFirst',
      group: 'pengaturan',
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto Cover Utama (Background)',
      type: 'image',
      description: 'Foto untuk background overlay di halaman pembuka.',
      options: { hotspot: true },
      group: 'pengaturan',
    }),
    defineField({
      name: 'music',
      title: 'Pilih Musik Latar',
      type: 'string',
      description: 'File MP3 harus ada di folder public/music proyek Astro',
      options: {
        list: [
          { title: 'Cinematic Wedding Inspiring and Uplifting (Default)', value: 'lagu1.mp3' },
          { title: 'Beautiful Emotional Cinematic Wedding', value: 'lagu2.mp3' },
        ],
      },
      group: 'pengaturan',
    }),
    defineField({
      name: 'quote',
      title: 'Kutipan / Ayat',
      type: 'text',
      rows: 3,
      description: 'Contoh: QS Ar-Rum 21 atau Ayat Alkitab',
      group: 'pengaturan',
    }),

    // --- GROUP 2: DATA MEMPELAI ---
    defineField({
      name: 'priaName',
      title: 'Nama Lengkap Pria',
      type: 'string',
      group: 'mempelai',
    }),
    defineField({
      name: 'priaNickname',
      title: 'Nama Panggilan Pria',
      type: 'string',
      group: 'mempelai',
    }),
    defineField({
      name: 'priaParents',
      title: 'Orang Tua Pria',
      type: 'string',
      description: 'Putra dari Bpk... & Ibu...',
      group: 'mempelai',
    }),
    defineField({
      name: 'priaFoto',
      title: 'Foto Pria',
      type: 'image',
      options: { hotspot: true },
      group: 'mempelai',
    }),
    defineField({
      name: 'priaIg',
      title: 'Username Instagram Pria (Tanpa @)',
      type: 'string',
      group: 'mempelai',
    }),

    defineField({
      name: 'wanitaName',
      title: 'Nama Lengkap Wanita',
      type: 'string',
      group: 'mempelai',
    }),
    defineField({
      name: 'wanitaNickname',
      title: 'Nama Panggilan Wanita',
      type: 'string',
      group: 'mempelai',
    }),
    defineField({
      name: 'wanitaParents',
      title: 'Orang Tua Wanita',
      type: 'string',
      description: 'Putri dari Bpk... & Ibu...',
      group: 'mempelai',
    }),
    defineField({
      name: 'wanitaFoto',
      title: 'Foto Wanita',
      type: 'image',
      options: { hotspot: true },
      group: 'mempelai',
    }),
    defineField({
      name: 'wanitaIg',
      title: 'Username Instagram Wanita (Tanpa @)',
      type: 'string',
      group: 'mempelai',
    }),

    // --- GROUP 3: ACARA ---
    // Akad
    defineField({
      name: 'akadDate',
      title: 'Tanggal & Jam Akad',
      type: 'datetime',
      group: 'acara',
    }),
    defineField({
      name: 'akadTimeManual',
      title: 'Jam Akad Manual (Opsional)',
      type: 'string',
      placeholder: '08.00 WIB - Selesai',
      description: 'Isi ini jika ingin menimpa format jam otomatis.',
      group: 'acara',
    }),
    defineField({
      name: 'akadPlace',
      title: 'Lokasi Akad',
      type: 'string',
      group: 'acara',
    }),
    defineField({
      name: 'akadAddress',
      title: 'Alamat Lengkap Akad',
      type: 'text',
      rows: 2,
      group: 'acara',
    }),
    defineField({
      name: 'akadMaps',
      title: 'Link Google Maps Akad',
      type: 'url',
      group: 'acara',
    }),

    // Resepsi
    defineField({
      name: 'resepsiDate',
      title: 'Tanggal & Jam Resepsi',
      type: 'datetime',
      group: 'acara',
    }),
    defineField({
      name: 'resepsiTimeManual',
      title: 'Jam Resepsi Manual (Opsional)',
      type: 'string',
      placeholder: '11.00 - 13.00 WIB',
      group: 'acara',
    }),
    defineField({
      name: 'resepsiPlace',
      title: 'Lokasi Resepsi',
      type: 'string',
      group: 'acara',
    }),
    defineField({
      name: 'resepsiAddress',
      title: 'Alamat Lengkap Resepsi',
      type: 'text',
      rows: 2,
      group: 'acara',
    }),
    defineField({
      name: 'resepsiMaps',
      title: 'Link Google Maps Resepsi',
      type: 'url',
      group: 'acara',
    }),

    // --- GROUP 4: GALERI & CERITA ---
    defineField({
      name: 'gallery',
      title: 'Galeri Foto',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
      group: 'galeri',
    }),
    defineField({
      name: 'videoLink',
      title: 'Link Video Youtube (Opsional)',
      type: 'url',
      group: 'galeri',
    }),
    defineField({
      name: 'loveStory',
      title: 'Kisah Cinta (Love Story)',
      type: 'array',
      group: 'galeri',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Tahun', type: 'string' },
            { name: 'story', title: 'Cerita Singkat', type: 'text', rows: 2 },
            { name: 'image', title: 'Foto Kenangan', type: 'image' }
          ]
        }
      ]
    }),

    // --- GROUP 5: KADO ---
    defineField({
      name: 'bankAccounts',
      title: 'Rekening Bank',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'bankName', title: 'Bank/E-Wallet', type: 'string' },
            { name: 'accountNumber', title: 'No. Rekening', type: 'string' },
            { name: 'accountName', title: 'Atas Nama', type: 'string' },
          ]
        }
      ],
      group: 'kado',
    }),
    defineField({
      name: 'giftAddress',
      title: 'Alamat Kirim Kado Fisik',
      type: 'text',
      group: 'kado',
    }),
  ],

  // --- PREVIEW DI DASHBOARD ---
  preview: {
    select: {
      pria: 'priaNickname',
      wanita: 'wanitaNickname',
      foto: 'coverImage', // Pakai cover sebagai thumbnail
      slug: 'slug.current'
    },
    prepare(selection) {
      const { pria, wanita, foto, slug } = selection
      const title = pria && wanita ? `${pria} & ${wanita}` : 'Draft Undangan Baru';
      return {
        title: title,
        subtitle: slug ? `🔗 /${slug}` : 'Link belum digenerate',
        media: foto
      }
    }
  }
})