import { mkdirSync, readdirSync, copyFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const rootDir = join(scriptDir, '..')
const sourceDir = join(rootDir, 'raid-g')
const targetDir = join(rootDir, 'out', 'raid-g')

const log = (message) => {
  // eslint-disable-next-line no-console
  console.log(`[copy-raidg] ${message}`)
}

const copyRecursive = (src, dest) => {
  mkdirSync(dest, { recursive: true })
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name)
    const destPath = join(dest, entry.name)
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else if (entry.isFile()) {
      copyFileSync(srcPath, destPath)
    }
  }
}

try {
  copyRecursive(sourceDir, targetDir)
  log(`Static RAID-G site copied to ${targetDir}`)
} catch (error) {
  log(`Skipping copy (reason: ${error.message})`)
  process.exit(0)
}
