import fs from 'fs'
import path from 'path'

export const readInput = (filename: string) => fs.promises.readFile(path.join(__dirname, `/inputs/${filename}`))

export const bufferToUtf8String = (buf: Buffer) => buf.toString('utf-8')

export const splitOnDoubleReturn = (str: string) => str.split(/(\r?\n){2}/)

export const splitOnReturn = (str: string) => str.split(/(\r?\n)/)
