import * as fs from 'fs'
import { globby, Options } from '@cjs-exporter/globby'

export async function getFiles(
  workdir: string,
  patterns: string[],
  options?: Options,
): Promise<string[]> {
  return globby(
    patterns.map((item) => {
      return workdir + item
    }),
    options,
  )
}

export async function readFile(path: string): Promise<string> {
  return fs.promises.readFile(path, 'utf-8')
}
