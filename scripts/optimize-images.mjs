import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const logoPath = join(root, 'src/assets/logo.png')

const logoBuffer = await readFile(logoPath)

const optimizedLogo = await sharp(logoBuffer)
  .resize(256, 256, { fit: 'inside', withoutEnlargement: true })
  .png({ compressionLevel: 9, palette: true })
  .toBuffer()

await writeFile(logoPath, optimizedLogo)

await sharp(logoBuffer)
  .resize(64, 64, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(join(root, 'public/favicon.png'))

const ogTitleSvg = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0d0d0d"/>
    <text x="600" y="300" text-anchor="middle" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="700">Pablo Contreras</text>
    <text x="600" y="370" text-anchor="middle" fill="#00e5a0" font-family="Arial, Helvetica, sans-serif" font-size="32" font-weight="500">Frontend Developer</text>
  </svg>
`)

const ogLogo = await sharp(logoBuffer)
  .resize(180, 180, { fit: 'inside', withoutEnlargement: true })
  .png()
  .toBuffer()

await sharp(ogTitleSvg)
  .composite([{ input: ogLogo, top: 72, left: 510 }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(join(root, 'public/og-image.jpg'))

console.log('Optimized logo.png, public/favicon.png, and public/og-image.jpg')
