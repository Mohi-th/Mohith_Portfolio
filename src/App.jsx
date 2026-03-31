import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css"

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-screen overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Home />
      </div>
    </ThemeProvider>
  )
}
