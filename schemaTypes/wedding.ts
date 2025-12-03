import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'wedding',
  title: 'Undangan Pernikahan',
  type: 'document',
  // Ini untuk membuat Tab-Tab di atas form agar tidak pusing scroll ke bawah
  groups: [
    { name: 'pengaturan', title: '⚙️ Pengaturan Tema' },
    { name: 'mempelai', title: '👰🤵 Data Mempelai' },
    { name: 'acara', title: '📅 Waktu & Lokasi' },
    { name: 'galeri', title: '📷 Galeri & Cerita' },
    { name: 'kado', title: '🎁 Kado Digital' },
  ],
  fields: [
    // --- GROUP 1: PENGATURAN TEMA & URL ---
    defineField({
      name: 'slug',
      title: 'Link Undangan (URL)',
      type: 'slug',
      description: 'Contoh: andi-siti. Nanti linknya jadi web-anda.com/andi-siti',
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
          { title: 'Jawa Klasik (Cokelat)', value: 'jawa' },
          { title: 'Rustic Modern (Kayu/Putih)', value: 'rustic' },
          { title: 'Elegant Floral (Bunga)', value: 'floral' },
          { title: 'Minimalis (Hitam Putih)', value: 'minimal' },
        ],
      },
      initialValue: 'rustic',
      group: 'pengaturan',
    }),
    defineField({
      name: 'music',
      title: 'Musik Latar (MP3)',
      type: 'file',
      options: { accept: 'audio/mp3' },
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
    // Mempelai Pria
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
      title: 'Nama Orang Tua Pria',
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

    // Mempelai Wanita
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
      title: 'Nama Orang Tua Wanita',
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
    // Akad / Pemberkatan
    defineField({
      name: 'akadDate',
      title: 'Waktu Akad/Pemberkatan',
      type: 'datetime',
      group: 'acara',
    }),
    defineField({
      name: 'akadPlace',
      title: 'Lokasi Akad',
      type: 'string',
      description: 'Nama Masjid / Gereja / Gedung',
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
      title: 'Waktu Resepsi',
      type: 'datetime',
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
      title: 'Galeri Foto Prewedding',
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

    // --- GROUP 5: KADO DIGITAL ---
    defineField({
      name: 'bankAccounts',
      title: 'Daftar Rekening Bank',
      type: 'array',
      group: 'kado',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'bankName', title: 'Nama Bank / E-Wallet', type: 'string' },
            { name: 'accountNumber', title: 'Nomor Rekening', type: 'string' },
            { name: 'accountName', title: 'Atas Nama', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'giftAddress',
      title: 'Alamat Kirim Kado Fisik',
      type: 'text',
      group: 'kado',
    }),
  ],

  preview: {
    select: {
      pria: 'priaNickname',
      wanita: 'wanitaNickname',
      foto: 'priaFoto', // Kita pakai foto pria sebagai thumbnail
      slug: 'slug.current'
    },
    prepare(selection) {
      const { pria, wanita, foto, slug } = selection
      // Jika nama belum diisi, pakai placeholder
      const title = pria && wanita ? `${pria} & ${wanita}` : 'Draft Undangan Baru';
      
      return {
        title: title,       // Judul Besar (Contoh: Andi & Siti)
        subtitle: slug ? `🔗 /${slug}` : 'Belum ada link', // Judul Kecil (Link)
        media: foto         // Foto Thumbnail
      }
    }
  }
})