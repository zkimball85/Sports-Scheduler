Title: Gridiron Logistics: The Cyber-Stone Schedule Generator Version: 1.0 Developer: Zues

Short Pitch: Forget spreadsheets and scratch paper. Gridiron Logistics is a desktop application designed for high school and league coaches who need to generate, customize, and export season schedules in seconds—wrapped in a high-contrast "Cyber-Stone" interface.

Key Features:

Dynamic Roster Management: Add or remove teams instantly. The app utilizes local memory to persist your league roster between sessions—never re-type your teams.

Smart Generation Algorithm: Automatically shuffles matchups and handles "Bye Weeks" for odd-numbered leagues.

Drag-and-Drop Logistics: Powered by SortableJS, you can drag games between weeks to accommodate rivalry games or scheduling conflicts.

Detailed Game Cards: Edit time, location, and travel notes directly on the game ticket.

One-Click Export: Compiles your finished season into a clean, printable HTML document saved directly to your Desktop.

Tech Stack:

Framework: Electron (Node.js + Chromium)

Languages: HTML5, CSS3 (Custom "Glassmorphism" UI), JavaScript (ES6)

Libraries: SortableJS, FileSystem API (fs)


HIGH SCHOOL FOOTBALL SCHEDULE GENERATOR
Version: 1.0 (Cyber-Stone Edition)
Developer: Zues
---------------------------------------------------------

DESCRIPTION:
This is a desktop application designed to generate, manage, and export 
high school football league schedules. It features a persistent team roster, 
drag-and-drop game management, and full itinerary planning capabilities.

---------------------------------------------------------
HOW TO RUN:

For Windows Users:
1. Open the folder.
2. Double-click "ScheduleGenerator.exe".

For Mac Users:
1. Open the folder.
2. Double-click the "ScheduleGenerator" app.

---------------------------------------------------------
FEATURES & INSTRUCTIONS:

1. TEAM MANAGEMENT
   - The app automatically remembers your teams between sessions.
   - Type a school name in the "Add Team" box and click (+) to add.
   - Click the red [x] next to a team to remove it from the league.

2. GENERATING A SEASON
   - Set the "Weeks" counter (e.g., 5, 8, 10).
   - Click "GENERATE SCHEDULE".
   - The system will randomly shuffle teams and create weekly matchups.
   - If you have an odd number of teams, a "BYE Week" is automatically assigned.

3. EDITING THE SCHEDULE (The "Command Center")
   - EDIT MATCHUPS: Click directly on any Team Name to type a new name.
   - EDIT DETAILS: Click the Date, Time, or Location fields to enter specific info.
   - REORDER GAMES: Click and hold any Game Card to drag it to a different week.

4. SAVING & EXPORTING
   - Click the Green "SAVE TO DESKTOP" button.
   - A file named "Football_Schedule.html" will be created on your Desktop.
   - You can open this file to print the schedule or email it to coaches.

---------------------------------------------------------
TROUBLESHOOTING:

- If the app screen is blank: Ensure you are not blocking JavaScript.
- If "Save to Desktop" fails: Check your antivirus settings; the app needs 
  permission to write files to your Desktop.

---------------------------------------------------------
BUILT WITH:
- Electron Framework
- Node.js
- SortableJS