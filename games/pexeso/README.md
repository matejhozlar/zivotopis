# Pexeso Game

A retro-inspired memory game built with HTML, CSS, and JavaScript. Choose your difficulty level, select a board size, and flip matching cards to win—while the background music sets the nostalgic arcade mood!

## Table of Contents
1. [Features](#-features)
2. [Installation and Setup](#-installation-setup)
3. How to Play
4. Difficulties & Board Sizes
5. Project Structure
6. Customization
7. License

## 🎨 Features
- **Multiple Difficulties**:
    - **Easy**: Relaxing, with no timer.
    - **Medium**: Balanced timer.
    - **Hard**: 20-second interval shuffles.
    - **Insane**: 10-second interval shuffles with a timer + instant card flip-back.
- **Dynamic Board Sizes**: 2x2, 4x4, 6x6, or 8x8 grids.
- **Loading Screen**: A glitchy “LOADING…” screen that fades out after a few seconds.
- **Animated Feedback**: Cards flip, matched pairs vanish, and the screen flashes green on victory or red on timeout.
- **Background Music**: Looped retro music with a toggle button to mute/unmute.

## 🚀 Installation and Setup

1. **Clone or Download** this repository:
```bash
git clone https://github.com/matejhozlar/resume.git
```
2. **Open** the project folder in your code editor or file explorer.
3. **Run** the game locally by opening ```./games/pexeso/index.html``` in your web browser.
   *(No additional server or dependencies required.)*

## How to Play
1. **Launch the Game**: Upon opening ```./games/pexeso/index.html```, you will see a loading screen, then an intro menu.
2. **Select Difficulty & Board Size**:
   - Choose a difficulty level (Easy, Medium, Hard, or Insane).
   - Pick a board size (2x2, 4x4, 6x6, 8x8).
3. **Flip Cards**: Click any two cards to reveal them. If they match, they vanish. If not, they flip back.
4. **Match All Pairs**: Continue matching until all pairs are found or the timer runs out.
5. **Win or Game Over**:
   - If you match all pairs before the time is up, you win!
   - If the time runs out (or you press "Exit"), the game ends.
   - You can return to the main menu or select new settings to play again.
  
## Difficulties & Board Sizes
- **Easy**:
  - No timer; relaxed play.
  - Cards do not shuffle.
- **Medium**:
  - A countdown timer based on board size (e.g., 4x4 = 60s).
  - Cards do not shuffle.
- **Hard**:
  - Same timer as Medium.
  - Cards shuffle every **20 seconds**.
- **Insane**:
  - Same timer as Medium.
  - Cards shuffle every **10 seconds**, and mismatched cards flip back **instantly**
**Board Sizes**:
- **2x2** (quick & casual)
- **4x4** (standard)
- **6x6** (challenging)
- **8x8** (ultimate test)

## Project Structure
```cpp
pexeso-game/
│
├─ index.html           // Main HTML file
├─ css/
│  └─ styles.css        // Core game styling
├─ assets/
│  ├─ images/           // Favicon and image assets
│  └─ music/            // Background & sound effects
├─ scripts/
│  ├─ game.js           // Main game logic (board setup, matching, timer, etc.)
│  ├─ music.js          // Background music toggle & autoplay handling
│  └─ load-animation.js // Loading screen logic
└─ README.md            // Project documentation
```

1. ```index.html```: Contains the game layout (intro screen, difficulty selection, game board, end screen).
2. ```game.js```: Defines how the game is played (difficulty logic, card flipping, matching, timer).
3. ```music.js```: Handles background music playback and the mute/unmute button.
4. ```load-animation.js```: Controls the initial loading screen.
5. ```style.css```: Provides the retro visuals, animations, and responsive layout.

## Customization
- **Symbols**: The ```generateSymbols()``` function in ```game.js``` can be edited to include any emojis or symbols you like.
- **Time Limits**: Adjust the ```setTimeForDifficulty()``` function to tweak how much time each board size gets.
- **Shuffle Intervals**: Modify the intervals for Hard (20s) or Insane (10s) in ```startGame()``` if you want more or less frequent shuffles.
- **Music**: Replace ```music.mp3``` in the ```assets/music/``` folder with your own track. Update the path in ```index.html``` if the file name changes.


