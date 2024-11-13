import "./App.css";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";


function App() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if(!mounted) return null
  
    return (
        <div className="bg-background">
            <div className=" text-center w-full h-full">
                The current theme is: {theme}
                <button onClick={() => setTheme('light')}>Light Mode</button>
                <button onClick={() => setTheme('dark')}>Dark Mode</button>
            </div>
        </div>
    );
}

export default App;
