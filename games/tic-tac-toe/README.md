# Tic-Tac-Toe Ultimate Customizable Challange
A modern twist on the classic Tic Tac Toe game with customizable grid sizes, win conditions, and an option to play locally or against an AI opponent. Enjoy a retro-inspired interface with neon aesthetics, smooth animations, and dynamic music—all wrapped in a nostalgic arcade feel.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation & Setup](#installation--setup)
4. [How to Play](#how-to-play)
5. [Project Structure](#project-structure)
6. [Customization](#customization)

## Introduction
Tic Tac Toe – Ultimate Customizable Challenge takes the well-known game to a new level. Whether you prefer local play against a friend or challenging an AI with adjustable difficulty, this project lets you tailor the experience. Choose your grid size (3x3, 4x4, or 5x5) and win pattern (3, 4, or 5 in a row) to create endless gameplay variations. The retro visual style, glitch effects, and background music evoke a classic arcade atmosphere while delivering modern interactive features.

## Features
- **Customizable Game Settings**:
  - **Grid Size & Win Conditions**: Select from 3x3, 4x4, or 5x5 boards with corresponding win conditions.
  - **Local & AI Modes**: Play against another local player or test your skills against an AI opponent.
- **AI Oponnent with Multiple Difficulties**:
  - **Easy, Medium, and Hard**: Choose the AI challange level to match your skill.
  - **Strategic Play**: The AI uses various strategies from random moves to minmax with alpha-beta pruning.
- **Retro Arcade Aesthetics**:
  - **Glicth & Neon Effects**: Enjoy a stylish interface using the "Press Start 2P" font, neon borders, and animated glitch effects.
  - **Smoooth Animations**: From card placements to win message transitions, each element is designed for a dynamic experience.
- **Responsive Design & Music**:
  - **Background Music**: A looping retro track with a toggle option for an immersive atmosphere.
  - **Mobile Friendly**: Responsive layout adapts to different screen sizes.

## Installation & Setup
1. **Clone or Downoload the Repository**:
```bash
git clone https://github.com/matejhozlar/resume.git
```
2. **Open the Project**:
   - Navigate to the project folder ```games/tic-tac-toe/```
   - Open ```index.html``` in your preffered web browser.
3. **Play the Game**:
   - No additional dependencies or servers are needed.
   - Enjoy customizing and playing!
 
## How to Play
1. **Launch the Game**:
   Open ```games/tic-tac-toe/index.html``` in your browser. The game starts with a loading screen that transitions into the intro menu.
2. **Select Your Mode**:
   - **Local**: Play against another person locally.
   - **Play vs AI**: Choose to face the computer; you will be prompted to select an AI difficulty.
   - **Settings**: Customize the grid size and win condition if you want a tailored challange.
   - **Exit**: Return to the main projects page.
3. **Game Screen**:
   Once the mode is selected, the game board appears along with an indicator showing whose turn it is. Click on the board cells to mark them with either "X" or "O". The board is dynamically created based on your selected grid size.
4. **Winning & Restarting**:
   When a winning pattern is achieved or the game ends in a draw, a win screen displays the result. You can restart the game or return to the menu.

## Project Structure
```cpp
   tic-tac-toe/
│
├─ index.html           // Main HTML file for the game interface
├─ css/
│   └─ styles.css       // All styles and animations for the retro look
├─ assets/
│   ├─ images/          // Favicon and any image assets
│   └─ music/           // Background music file
├─ scripts/
│   ├─ game.js          // Game logic (handling moves, checking win conditions, AI, etc.)
│   ├─ music.js         // Music playback and toggle logic
│   └─ load-animation.js// Loading screen animation script
└─ README.md            // This documentation file
```
- ```index.html```: Contains the structure for intro, difficulty selection, custom rules, game board, and win screen.
- ```game.js```: Handles game logic including player turns, AI moves, win checking, and board setup.
- ```music.js```: Manages background music playback and mute/unmute functionality.
- ```load-animations.js```: Displays the animated loading screen before the game starts.
- ```styles.css```: Provides the retro-themed design, including neon effects, glitch animations, and responsive styling.

- ## Customization
- **Game Settings**:
  Modify grid sizes and win patterns in the Custom Rules section via the dropdown menus.
  Edit ```game.js``` if you wish to change default values or add new difficulty leves.
- **AI Behavior**:
  The AI logic in ```game.js``` supports different difficulty modes. Tweak functions like ```getRandomMove()```, ```getMediumMove()```, or ```minmax()``` to adjust how challenging the AI is.
- **Styling & Animations**:
  Update ```styles.css``` to adjust the retro look. Change colors, animation speeds, and typography to better match your vision.
- **Music**:
  Replace ```music.mp3``` in the assets/music/``` folder with your own track. Ensure the file path in ```index.html``` is updated accordingly.
