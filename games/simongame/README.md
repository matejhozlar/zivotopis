# Simon - Retro Memory Game
A modern take on the classic “Simon” electronic memory game. Watch the pattern of lights and sounds, then repeat it to advance. Each level adds a new color to the sequence, challenging your memory and reflexes in a fun, arcade-inspired style.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [How to Play](#how-to-play)
4. [Project Structure](#project-structure)
5. [Customization](#customization)

## Introduction
Simon is a simple yet addictive memory game. This version uses **HTML, CSS, and vanilla JavaScript** to deliver a retro vibe, complete with neon colors, glitch effects, and a playful loading screen.

## Features
- **Loading Screen**: Displays a dynamic "LOADING..." glitch animation before the game starts.
- **Pop-up Rules**: A handy rules window explains how to play at any time.
- **Responsive inputs**: Press any key to start, then click the colored buttons to replicate the pattern.
- **Game Over Feedback**: Background flashes red with a "Game Over" message when you miss a sequence.

## How to Play
1. **Launch the Game**
   - open ```games/simongame/index.html``` in your browser.
   - After the loading screen, you will see a "Press A Key to Start."
2. **Start the Sequence**:
   - Press any key. The game randomly lights up a colored button, playing a short sound.
3. **Repeat the Pattern**:
   - Click each button in the exact order shown.
   - Each successful level adds one more color to the sequence.
4. **Rules Popup**:
   - Click the "Rules" button (top-left) to see instructions in a pop-up window.
5. **Game Over**:
   - If you click the wrong button, the screen flashes red and the sequence resets. Press any key to start over.
  
## Porject Structure
```cpp
     simon/
│
├─ index.html          // Main HTML file
├─ game.js             // Core game logic (sequence generation, user checks)
├─ rules.js            // Pop-up logic for displaying rules
├─ load-animation.js   // Controls the loading screen animations
├─ sounds/             // Audio files for each color + wrong sound
├─ styles.css          // Retro style & layout
└─ ...                // Additional scripts (e.g., glitch effects)
```
- ```index.html```: Lays out the game board, including color buttons and text elements.
- ```game.js```: Generates random sequences, checks user input, and handles level progression or game over states.
- ```rules.js```: Manages "Rules" button and pop-up.
- ```load-animation.js```: Handles the initial loading screen.
- ```styles.css```: Provides the retro-themed styling, including glitch animations, color highlights, and transitions.

## Customization
- **Colors & Sounds**: Update the ```buttonColours``` array in ```game.js``` or add new ```.mp3``` files in the ```sounds/``` folder to change the button colors and audio.
- **Styling**: Tweak ```styles.css``` to change button sizes, background colors, or animations.
- **Rules Popup**: Edit ```rules.js``` and the pop-up content in ```index.html``` to provide additional tips or instructions.
