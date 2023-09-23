import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/Theme/ThemeBtn'
import Card from './components/Card/Card'

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual changing the theme

  useEffect(() => {
    const htmlSelector = document.querySelector('html');
    htmlSelector.classList.remove("light", "dark")
    htmlSelector.classList.add(themeMode)
  }, [themeMode])



  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Button  */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
