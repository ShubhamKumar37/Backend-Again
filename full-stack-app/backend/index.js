import express from 'express'
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 4000;

// app.use(cors(
//     {
//         origin: "*",
//     }
// ))

// app.use(express.static("./dist"));

app.get("/api/jokes", (req, res) =>
{
    const jokes = [
        {
            id: 1,
            joke: "What is the best thing about Switzerland? I don't know, but the flag is a big plus."

        },
        {
            id: 2,
            joke: "I invented a new word! Plagiarism!"
        },
        {
            id: 3,
            joke: "I'm reading a book about anti-gravity. It's impossible to put down!"
        },
        {
            id: 4,
            joke: "I invented a new word! Plagiarism!"
        },
        {
            id: 5,
            joke: "I'm reading a book about anti-gravity. It's impossible to put down!"
        },
        {
            id: 6,
            joke: "I invented a new word! Plagiarism!"
        },
        {
            id: 7,
            joke: "I'm reading a book about anti-gravity. It's impossible to put down!"
        },
        {
            id: 8,
            joke: "I invented a new word! Plagiarism!"
        },
    ]
    res.send(jokes);
});

app.listen(PORT, () =>
{
    console.log(`Server is running on http://localhost:${PORT}`);
});