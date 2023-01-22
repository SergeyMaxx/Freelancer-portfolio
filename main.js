const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Проверка темной темы на уровне системных настроек
if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
  btnDarkMode.classList.add('dark-mode-btn__active')
  document.body.classList.add('dark')
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn__active')
  document.body.classList.add('dark')
} else {
  btnDarkMode.classList.remove('dark-mode-btn__active')
  document.body.classList.remove('dark')
}

// 3. Если меняются системные настройки, меняем тему
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const newColorScheme = e.matches ? 'dark' : 'light'

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn__active')
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'dark')
  } else {
    btnDarkMode.classList.remove('dark-mode-btn__active')
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', 'light')
  }
})

btnDarkMode.addEventListener('click', () => {
  btnDarkMode.classList.toggle('dark-mode-btn__active')
  const isDark = document.body.classList.toggle('dark')
  isDark ? localStorage.setItem('darkMode', 'dark') : localStorage.setItem('darkMode', 'light')
})