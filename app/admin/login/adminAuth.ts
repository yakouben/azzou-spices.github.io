// بيانات الأدمن الثابتة
export const ADMIN_CREDENTIALS = {
  email: 'ishak@gmail.com',
  password: 'ishak123'
}

export const verifyAdmin = (email: string, password: string) => {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
} 