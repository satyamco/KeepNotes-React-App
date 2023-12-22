import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import Header from "./componetns/Header"
import Card from "./componetns/Card"
import Input from "./componetns/Input"


function App() {
  const [themeMode, setThemeMode] = useState('dark')
  const [notes, setNotes] = useState([])


  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    })
  }

  const deleteNote = (id) => {
    setNotes((prevNotes) => (
      prevNotes.filter((note, index) => (index !== id)
      )))
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"))
    if (notes && notes.length > 0) {
      setNotes(notes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }} >
      <div className="w-full h-[1500px] bg-slate-100 dark:bg-slate-800">
        <Header />

        <Input
          onAdd={addNote}
        />

        <div className="feed">

          {notes.map((note, index) => (
            <Card
              key={index}
              id={index}
              title={note.title}
              desc={note.description}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
