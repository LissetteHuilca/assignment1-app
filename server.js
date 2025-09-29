/********************************************************************************
* WEB322 – Assignment 01
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Lissette Huilca Aguilar Student ID: 107510240 Date: 29-09-2025
*
********************************************************************************/

const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const PORT = process.env.PORT || 8080; // assign a port

const projectData = require("./modules/projects")

app.get('/', (req, res) => {
  res.send('Assignment 1: Lissette Huilca Aguilar - 107510240');
});

app.get('/solutions/projects', (req, res) => {
    projectData.getAllProjects()
        .then(data => res.json(data))
        .catch(err => res.send(err));
});

app.get('/solutions/projects/id-demo', (req, res) => {
    projectData.getProjectById(5)
        .then(project => res.json(project))
        .catch(err => res.send(err));
});

app.get('/solutions/projects/sector-demo', (req, res) => { 
    projectData.getProjectsBySector("agriculture")
        .then(projects => res.json(projects))
        .catch(err => res.send(err));
});

projectData.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.log("Initialization failed:", err));

// --- Vercel ---
module.exports = app;