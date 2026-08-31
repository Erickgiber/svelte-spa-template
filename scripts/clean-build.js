import fs from 'fs'
import path from 'path'

const distDir = path.resolve('dist')
const indexHtmlPath = path.join(distDir, 'index.html')

if (fs.existsSync(indexHtmlPath)) {
  const htmlContent = fs.readFileSync(indexHtmlPath, 'utf-8')
  const assetsDir = path.join(distDir, '_app', 'immutable', 'assets')

  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir)
    for (const file of files) {
      // Remove unreferenced SSR style chunks copied by static adapter
      if (file.endsWith('.css') && !htmlContent.includes(file)) {
        fs.unlinkSync(path.join(assetsDir, file))
      }
    }
  }
}
