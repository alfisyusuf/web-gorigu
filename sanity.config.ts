import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'gorigu-project',
  title: 'Gorigu Admin',
  
  // Ganti dengan Project ID Anda sama seperti di astro.config.mjs
  projectId: '0rudm0te', 
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [
      // Ini adalah definisi tipe "post" yang kita panggil di frontend tadi
      {
        name: 'post',
        type: 'document',
        title: 'Postingan Blog',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Judul Tulisan',
          },
          // Kita tambah satu field lagi untuk tes
          {
            name: 'content',
            type: 'text',
            title: 'Isi Konten',
          }
        ],
      },
    ],
  },
});