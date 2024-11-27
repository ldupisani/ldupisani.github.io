# ldupisani.github.io

Advanced drumming metronome (Alpha)

## Basic operation

- This tool is particularly good for training your timing
- Simply plug in a MIDI drum controller and you will be ready to play
- Hit any drum to start the timer
- [SPACE] to reset
- [ESC] to pause
- If you want to test with your keyboard check out the hotkeys by clicking on the 🥁 icon
- You can also change the keys or configure your midi mapping from here by hittin a drum
- You're hit % is displayed at the top

## Playback

- You can change the accuracy required for hits in the top left
- Increase or reduce the `Time` or `Velocity` accuracy
- Velocity range is 1-128
- Click the 🔈 icon to enable the metronome click sound
- Enabling sound is a bit fiddly on web, so you might need to click this to hear any sound
- You can choose from a couple of Kits
- But better to disable this and pipe sound from your drumkit instead.

## Hits and misses

- If you accurately hit a drum it will flare white and get knocked off the track
- Close misses are indicated with the bar being knocked forward or backward
- If you hit too hard, or too soft the bar will stay in place but change color
- You will also hear a fail sound. Pitched high for early notes, low for late notes.

## Kit caveats

- Kit that can produce different sound will appear on the same lane but have different colors
- The hi-hat lane for instance hosts `Closed`, `Open`, and `Pedal` hits
- `Pedal` hits are treated a bit differently
  - They don't produce a failed sound
  - Pedal hits are also full velocity (At least that is what my Nitro does)
- Speaking of which, this is tested on an Alesis Nitro Mesh and nothing else yet

## Exercises and Editor

- There are pre-configured exercises to choose from
- You can also hit the + button to create your own from the selected template
- This will save your exercise in a slot
- You can `EDIT` the hits and velocities
- To change the velocity of a note hover over it and use the [+] or [-] key
- Use the arrow keys to move the cursor forward or bakwards
- [UP] = Snap FWD, [RIGHT] = Nudge FWD, [DN] = Snap BACK, [LEFT] = Nudge Back
- Or use the buttons that pop up when you hit `EDIT`
- You can also just hit a drum to add or remove it at the cursor position at a given velocity
- There is a `Copy` icon that will duplicate the last hit at the current cursor position
