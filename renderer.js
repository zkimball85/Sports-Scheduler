// 1. IMPORTS
// If these fail, the app goes blank. We wrap them in try/catch to see the error.
let Sortable, fs, path, os;
try {
    Sortable = require('sortablejs');
    fs = require('fs');
    path = require('path');
    os = require('os');
    console.log("Modules loaded successfully");
} catch (e) {
    console.error("CRITICAL ERROR LOADING MODULES:", e);
    alert("Error loading modules! Check the console.");
}

// 2. SETUP DATA (UPDATED WITH MEMORY)
let teams = [];

// Try to load saved teams from the computer's brain
const savedData = localStorage.getItem('zuesFootballTeams');

if (savedData) {
    // If we found saved data, use it!
    teams = JSON.parse(savedData);
} else {
    // If no saved data (first time running), use defaults
    teams = ["Clover Park", "Lakes", "Franklin Pierce", "Steilacoom", "Fife", "Washington"];
}

// 3. GET ELEMENTS
const els = {
    input: document.getElementById('team-input'),
    addBtn: document.getElementById('btn-add'),
    list: document.getElementById('team-list-display'),
    weeks: document.getElementById('season-length'),
    genBtn: document.getElementById('btn-generate'),
    saveBtn: document.getElementById('btn-save'),
    output: document.getElementById('schedule-output')
};

// 4. FUNCTIONS (UPDATED WITH SAVING)

// Helper: Save current list to memory
function saveToMemory() {
    localStorage.setItem('zuesFootballTeams', JSON.stringify(teams));
}

function renderList() {
    els.list.innerHTML = "";
    teams.forEach((t, i) => {
        const li = document.createElement('li');
        li.innerHTML = `${t} <span onclick="delTeam(${i})" style="color:red;cursor:pointer;margin-left:10px;font-weight:bold;">[x]</span>`;
        els.list.appendChild(li);
    });
}

// Global delete function
window.delTeam = (i) => {
    teams.splice(i, 1);
    saveToMemory(); // <--- SAVE!
    renderList();
};

// Add Button
els.addBtn.addEventListener('click', () => {
    const val = els.input.value.trim();
    if (val) {
        teams.push(val);
        els.input.value = "";
        saveToMemory(); // <--- SAVE!
        renderList();
    }
});

// Generate Button
els.genBtn.addEventListener('click', () => {
    const weekCount = parseInt(els.weeks.value);
    els.output.innerHTML = "";

    for (let w = 1; w <= weekCount; w++) {
        // 1. Week Header
        const box = document.createElement('div');
        box.style.marginBottom = "30px";

        // --- CHANGE IS HERE: Color set to #0059ff ---
        box.innerHTML = `<h3 style="color:#0059ff; border-bottom:1px solid #444; padding-bottom:5px;">WEEK ${w}</h3>`;

        // 2. The List Container
        const ul = document.createElement('ul');
        ul.style.listStyle = "none";
        ul.style.padding = "0";

        // 3. Shuffle & Pair
        let currentTeams = [...teams].sort(() => Math.random() - 0.5);

        // Handle Bye
        if (currentTeams.length % 2 !== 0) {
            const bye = currentTeams.pop();
            box.innerHTML += `<div style="color:orange; padding:10px; background:rgba(255,165,0,0.1); border:1px solid orange; border-radius:4px; margin-bottom:10px;">BYE WEEK: ${bye}</div>`;
        }

        // 4. Create The Cards
        for (let i = 0; i < currentTeams.length; i += 2) {
            const teamA = currentTeams[i];
            const teamB = currentTeams[i + 1];

            const li = document.createElement('li');
            li.className = 'game-card';

            li.innerHTML = `
                <div class="card-top-row">
                    <input type="date" class="game-date" style="color:#0059ff; font-weight:bold;">
                    <input type="text" value="7:00 PM" placeholder="Time">
                </div>

                <div class="card-matchup">
                    <span contenteditable="true">${teamA}</span> 
                    <span style="font-size:14px; color:#555;">vs</span> 
                    <span contenteditable="true">${teamB}</span>
                </div>

                <input type="text" class="card-location" value="${teamA} Stadium" placeholder="Site Location">
                <input type="text" class="card-travel" placeholder="Travel Notes (Bus times, routes)...">
            `;
            ul.appendChild(li);
        }

        box.appendChild(ul);
        els.output.appendChild(box);

        if (Sortable) new Sortable(ul, { group: 'shared', animation: 150 });
    }
});

// Save Button
els.saveBtn.addEventListener('click', () => {
    if (!fs) return alert("File System not loaded.");

    const htmlContent = `<html><body><h1>Schedule</h1>${els.output.innerHTML}</body></html>`;
    const savePath = path.join(os.homedir(), 'Desktop', 'Football_Schedule.html');

    try {
        fs.writeFileSync(savePath, htmlContent);
        alert("Saved to Desktop!");
    } catch (err) {
        alert("Error saving: " + err);
    }
});

// Start
renderList();