import { LeafIcon } from './LeafIcon'

export function Footer() {
  return (
    <footer className="bg-saig-dark-950 border-t border-saig-dark-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-8">
            <LeafIcon />
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