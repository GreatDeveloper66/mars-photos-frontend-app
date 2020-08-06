import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.APIURL)
export const URL = process.env.REACT_APP_APIURL
