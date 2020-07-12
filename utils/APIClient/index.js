import axios from 'axios'
import { getUser } from 'utils'

const user = getUser()

const headers = user ? { Authorization: `Bearer ${user.token}` } : {}

const APIClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: headers,
  timeout: 50000
});

export default APIClient
