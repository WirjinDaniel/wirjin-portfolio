# wirjin.sys — Portafolio personal

## Requisitos
- Node.js 18+
- npm

## Desarrollo local
```bash
npm install
npm run dev
```
Abre http://localhost:3000.

## Editar el contenido
Todo el contenido del portafolio esta en un solo archivo:

```
lib/data.ts
```

Edita los arrays ahi y los cambios se reflejan automaticamente en todo el sitio.

## CV descargable
Coloca tu CV en PDF en:
```
public/cv/wirjin-sanchez-cv.pdf
```

## Deploy en Vercel
```bash
npx vercel --prod
```
