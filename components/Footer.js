export function Footer() {
  return (
    <footer className="bg-saig-dark-950 border-t border-saig-dark-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-8">
            <div className="h-10 w-10 rounded-lg gradient-saig flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <span className="ml-3 text-xl font-bold text-white">SAIGBOX</span>
          </div>
          <nav className="flex gap-x-8 mb-8">
            <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              Support
            </a>
          </nav>
          <p className="text-sm leading-5 text-gray-500">
            &copy; 2025 SAIGBOX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}