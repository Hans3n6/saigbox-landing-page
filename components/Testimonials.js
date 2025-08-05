const testimonials = [
  {
    content: 'SAIGBOX transformed how I handle emails. I used to spend hours sorting through my inbox, now it\'s all automated. Best productivity tool I\'ve invested in!',
    author: {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=00af00&color=fff',
    },
  },
  {
    content: 'The AI prioritization is incredibly accurate. It knows which emails need my immediate attention and which can wait. Highly recommend for busy professionals!',
    author: {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=00af00&color=fff',
    },
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-saig-dark-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Hear what our users have to say about SAIGBOX
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-saig-dark-800 p-8 rounded-2xl border border-saig-dark-700">
                <blockquote className="text-gray-300">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}