const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.port || 3001;
const app = express();

// const { db } = require('./db/db.json');


app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api')



// require('./routes/index')(app);


app.get("/api/notes", (req, res) => {
    res.JSON(notes);
});

app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    sendData();
    return console.log("New note added!")
});

app.get("/api/notes/:id", (req, res) => {
    res.JSON(notes[req.params.id]);
});

app.delete("/api/notes/:id", (req, res) => {
    notes.splice(req.params.id, 1);
    sendData;
    console.log("Deleted note with id "+req.params.id);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

sendData = () => {
    fs.writeFileSync("db/db.json", JSON.stringify(notes),err => {
        if (err) throw err;
        return true;
    });
}

// app.get('/api/db', (req, res) => {
//     let results = db;
//     console.log(req.query)
//     res.json(results);
// });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// GIVEN a note-taking application ++++
// WHEN I open the Note Taker ++++
// THEN I am presented with a landing page with a link to a notes page ++++
// WHEN I click on the link to the notes page ++++
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column ++++
// WHEN I enter a new note title and the note’s text ++++
// THEN a Save icon appears in the navigation at the top of the page ++++
// WHEN I click on the Save icon ++++
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column