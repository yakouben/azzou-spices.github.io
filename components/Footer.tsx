'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
            © 2024 جميع الحقوق محفوظة
          </div>
          {!isAdminPage && (
            <Link 
              href="/admin/login"
              className="text-gray-600 hover:text-amber-600 transition-colors"
            >
              تسجيل دخول اسحاق براهيمي
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
} 