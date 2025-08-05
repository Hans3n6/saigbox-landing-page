const steps = [
  {
    id: '01',
    title: 'Connect Your Email',
    description: 'Securely connect your existing email accounts with one-click OAuth integration. Works with Gmail, Outlook, and more.',
  },
  {
    id: '02',
    title: 'AI Learns Your Patterns',
    description: 'Our intelligent system analyzes your email habits and preferences to create a personalized management strategy.',
  },
  {
    id: '03',
    title: 'Enjoy a Clean Inbox',
    description: 'Experience the peace of mind that comes with an automatically organized, prioritized, and managed inbox.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-saig-dark-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            How It Works?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Get started with SAIGBOX in three simple steps
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, stepIdx) => (
              <div key={step.id} className="relative flex gap-x-6">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-saig-green-600 text-white">
                  <span className="text-xl font-bold">{step.id}</span>
                </div>
                <div className="flex-auto">
                  <h3 className="text-xl font-semibold leading-8 text-white">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-400">{step.description}</p>
                </div>
                {stepIdx !== steps.length - 1 && (
                  <div className="absolute left-8 top-16 h-full w-px bg-saig-dark-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}