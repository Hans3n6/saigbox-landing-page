'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Is my email data secure?',
    answer: 'Absolutely. We use bank-level encryption and never store your email content. All processing happens in real-time with your privacy as our top priority.',
  },
  {
    question: 'Which email providers does SAIGBOX support?',
    answer: 'SAIGBOX works with Gmail, Outlook, Yahoo Mail, and most IMAP-compatible email services. We\'re constantly adding support for more providers.',
  },
  {
    question: 'Can I customize the AI\'s behavior?',
    answer: 'Yes! SAIGBOX learns from your preferences and you can fine-tune its behavior through simple settings and feedback mechanisms.',
  },
  {
    question: 'What\'s the pricing model?',
    answer: 'We offer flexible monthly and annual plans starting at $9.99/month. There\'s also a 14-day free trial so you can experience SAIGBOX risk-free.',
  },
  {
    question: 'How quickly does SAIGBOX process emails?',
    answer: 'SAIGBOX processes emails in real-time. As soon as an email arrives, our AI analyzes and categorizes it instantly.',
  },
  {
    question: 'Can I use SAIGBOX on multiple devices?',
    answer: 'Yes! SAIGBOX works seamlessly across all your devices - desktop, tablet, and mobile. Your preferences sync automatically.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-saig-dark-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            FAQ
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Common questions about SAIGBOX
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <dl className="space-y-4">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="bg-saig-dark-800 rounded-lg">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left p-6">
                        <span className="text-base font-semibold leading-7 text-white">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6 text-saig-green-400" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="px-6 pb-6">
                      <p className="text-base leading-7 text-gray-400">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}