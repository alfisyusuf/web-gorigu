import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import wedding from './schemaTypes/wedding';

export default defineConfig({
  name: 'gorigu-project',
  title: 'Gorigu Admin',
  
  projectId: '0rudm0te', 
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [
      wedding, 
    ],
  },
});