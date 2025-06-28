const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    const links = [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Contact', href: '#' },
    ]
    
    return (
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* <div className="flex justify-center space-x-6 md:order-2">
              {links.map((link) => (
                
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div> */}
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                © {currentYear} TaskMaster. Built with React and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer