import { Button, Card, CardBody, Input } from "@nextui-org/react";
import "./App.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


function App() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="h-screen flex items-center justify-center bg-primary">
            <Card className="w-2/4 shadow-xl">
                <CardBody className="flex flex-col gap-4">
                    The current theme is: {theme}
                    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                    <Input type="email" label="E-mail" />
                    <Input type="password" label="Senha" />
                    <Button color="primary">Entrar</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default App;
