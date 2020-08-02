import mongoose from 'mongoose'
import 'dotenv/config'
const uri = process.env.MONGODB_CONNECTION

export const connection = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
