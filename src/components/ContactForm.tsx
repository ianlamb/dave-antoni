import React from 'react'

export const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(
        formData as unknown as URLSearchParams,
      ).toString(),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error(result.statusText)
        }
      })
      .then((result) => console.log('Form successfully submitted', result))
      .catch((error) => alert(error))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <article style={{ width: '640px' }}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h2>Get in touch!</h2>
          <fieldset>
            <p>
              <label>
                Full Name{' '}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="name"
                />
              </label>
            </p>
            <p>
              <label>
                Email{' '}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </fieldset>
        </form>
      </article>
    </div>
  )
}
