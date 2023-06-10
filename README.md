## Simon Game

#### This is a digital version of the classic Simon game implemented using HTML, CSS, and JavaScript (JQuery). The Simon game is a memory-based game where players must remember and reproduce a sequence of colors and sounds.

### Instructions

- Open the index.html file in your web browser to start the game.
- The game will display a heading with the message "Press A Key to Start" and a container with colored buttons.
- Press any key on your keyboard to start the game. The level will be displayed in the heading.
- The game will randomly select a button and flash it. Your task is to remember the sequence of colors and click the buttons in the same order.
- Click on the colored buttons to reproduce the sequence. Each button has a unique sound associated with it.
- If you click the buttons in the correct order, the game will advance to the next level and add another color to the sequence.
- If you make a mistake and click the buttons in the wrong order, the game will end and display a "Game Over" message.
- Press any key to restart the game and try again.

### Files

- **index.html**: The main HTML file that displays the game interface and includes the necessary CSS and JavaScript files.
- **styles.css**: The CSS file that defines the styles and layout for the game elements.
- **game.js**: The JavaScript file that implements the game logic, handles user input, and manages the sequence of colors.


### Customization

- You can customize the game's appearance by modifying the CSS styles in the styles.css file.
- To change the button colors, modify the background-color property for the respective color classes: .red, .green, .blue, and .yellow.
- To change the game's title, modify the text within the <h1> tag with the id "level-title".

### Sounds

 - The game includes sound effects for each button click. The sounds are stored in the sounds folder and follow the naming convention colorName.mp3.
- To replace the sound effects, add your own audio files to the sounds folder and ensure they are in the MP3 format.
- Make sure to name the audio files according to the color names used in the game logic.

### Credits
  
This Simon Game implementation was created by [M. Enes Celik].
