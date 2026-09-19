export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-navy)] md:text-4xl">
        Contact
      </h1>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        <div>
          <dl className="space-y-6 text-[15px]">
            <div>
              <dt className="text-[var(--color-gold)]">Office</dt>
              <dd className="mt-1 text-[var(--color-slate)]">
                Summit House, 4th Floor, Room 410<br />
                Moi Avenue, Nairobi<br />
                P.O. Box 24083-00100, Nairobi
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Email</dt>
              <dd className="mt-1">
                <a href="mailto:admin@omuyomaadvocates.com" className="text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4">
                  admin@omuyomaadvocates.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Phone</dt>
              <dd className="mt-1">
                <a href="tel:+254741159158" className="text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4">
                  +254 741 159 158
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[var(--color-gold)]">Existing client?</dt>
              <dd className="mt-1">
                <a href="https://app.omuyomaadvocates.co.ke" className="text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4">
                  Sign in to the client portal
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/*
          Static-site contact form. No backend on this project by design, so this posts to
          Formspree (https://formspree.io) — replace YOUR_FORM_ID below with the real endpoint
          once Omuyoma sets up an account, or swap this action for another form service.
        */}
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-[15px] text-[var(--color-navy)]">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full border border-black/15 bg-white px-4 py-2.5 text-[15px] outline-none focus-visible:border-[var(--color-gold)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[15px] text-[var(--color-navy)]">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-black/15 bg-white px-4 py-2.5 text-[15px] outline-none focus-visible:border-[var(--color-gold)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[15px] text-[var(--color-navy)]">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full border border-black/15 bg-white px-4 py-2.5 text-[15px] outline-none focus-visible:border-[var(--color-gold)]"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-[var(--color-navy)] px-6 py-3 text-[15px] text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-royal)]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
