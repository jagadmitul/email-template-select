import * as dotenv from 'dotenv'
dotenv.config()

console.log(process.env.S3_REGION, process.env.S3_ACCESS_KEY, process.env.S3_SECRET)
export const S3_REGION = process.env.S3_REGION || 'ap-south-1'
export const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY || ''
export const S3_SECRET = process.env.S3_SECRET || ''
