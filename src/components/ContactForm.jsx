import { useState } from 'react'
import { Send } from 'lucide-react'

const errorAlertClass =
  'rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-300'

const successAlertClass =
  'rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-center text-sm font-medium text-brand'

const submitButtonClass =
  'group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold tracking-tight text-zinc-950 shadow-[0_8px_28px_-8px_rgba(0,229,160,0.55)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-hover active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:hover:translate-y-0'

const fieldLabelClass =
  'mb-2 block text-xs font-medium uppercase tracking-wide text-zinc-500'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white shadow-inner shadow-black/20 placeholder:text-zinc-500 transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/15 focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/25 motion-reduce:transition-none user-invalid:border-red-400/50 user-invalid:focus:border-red-400/70 user-invalid:focus:ring-red-400/20'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID
  const maxMessage = 500
  const messageLength = message.length

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitted(false)

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedSubject = subject.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setError('Please fill in all fields before sending.')
      return
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!formspreeId) {
      setError('The form is not configured yet. Add VITE_FORMSPREE_ID to your .env file.')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          subject: trimmedSubject,
          message: trimmedMessage,
          _replyto: trimmedEmail,
        }),
      })

      if (!response.ok) {
        throw new Error('Formspree request failed')
      }

      setSubmitted(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      window.setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Could not send your message. Please try again or email me directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-zinc-900/45 p-6 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand/15 motion-reduce:hover:translate-y-0 sm:p-8 lg:p-9">
      <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">Send a Message</h3>

      <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={fieldLabelClass}>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
              required
            />
          </label>
          <label className="block">
            <span className={fieldLabelClass}>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
              required
            />
          </label>
        </div>

        <label className="block">
          <span className={fieldLabelClass}>Subject</span>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Project inquiry"
            className={inputClass}
            required
          />
        </label>

        <label className="relative block">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">Message</span>
            <span className={`text-xs tabular-nums ${messageLength > maxMessage ? 'text-red-400' : 'text-zinc-500'}`}>
              {messageLength}/{maxMessage}
            </span>
          </div>
          <textarea
            name="message"
            rows={6}
            maxLength={maxMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your goals, timeline, and stack…"
            className={`${inputClass} min-h-[140px] resize-y`}
            required
          />
        </label>

        {error ? (
          <p className={errorAlertClass} role="alert">
            {error}
          </p>
        ) : null}

        {submitted ? (
          <p className={successAlertClass} role="status">
            Thanks — your message was sent. I&apos;ll reply within 24–48 hours.
          </p>
        ) : null}

        <button type="submit" disabled={submitting} className={submitButtonClass}>
          <span>{submitting ? 'Sending…' : 'Send Message'}</span>
          <Send
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            aria-hidden
          />
        </button>
      </form>
    </div>
  )
}
