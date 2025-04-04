import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("https://chatbot-backend.onrender.com/") // Replace with your backend URL
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
