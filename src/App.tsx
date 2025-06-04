import { Button } from "@/components/ui/button"
import { useState } from "react"

function App() {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className="h-screen flex justify-center items-center flex-col">
                <div>
                    <h1 className="text-center">
                        Counter {counter}
                    </h1>
                    <div onClick={() => setCounter(counter + 1)}>
                        <Button>Click me</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
