const benefits = [
  {
    title: 'Smart Email Prioritization',
    description: 'AI-powered algorithms automatically sort and prioritize your emails, ensuring you never miss what\'s important.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-saig-green-500 to-saig-green-600',
  },
  {
    title: 'Save Hours Every Week',
    description: 'Reduce email management time by up to 70% with intelligent filtering and automated responses.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Enhanced Security',
    description: 'Advanced threat detection keeps spam and phishing attempts at bay, protecting your inbox and data.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Lightning Fast Search',
    description: 'Find any email instantly with powerful search capabilities that understand context and intent.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-600',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-saig-dark-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Benefits
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Experience the power of intelligent email management with features designed to transform your productivity.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-20 group-hover:opacity-30 blur transition duration-200 rounded-2xl ${benefit.gradient}"></div>
                <div className="relative bg-saig-dark-800 p-8 rounded-2xl border border-saig-dark-700 hover:border-saig-green-600/50 transition-colors">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white mb-5`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}