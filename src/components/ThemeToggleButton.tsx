import React from 'react'
import classnames from 'classnames'

export const ThemeToggleButton = () => {
  const [theme, setTheme] = React.useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    const html = document.querySelector('html')
    if (html) {
      html.dataset.theme = newTheme
    }
  }

  return (
    <button
      id="theme-toggle-btn"
      aria-label="Toggle dark mode"
      className={classnames({
        'dark-mode': theme === 'dark',
        'light-mode': theme === 'light',
      })}
      onClick={toggleTheme}
      title={`Toggle Theme: ${theme === 'dark' ? 'Light' : 'Dark'}`}
    >
      <img src="/icons/theme.png" alt="theme icon" />
    </button>
  )
}
