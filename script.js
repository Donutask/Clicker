const clickDisplay = document.getElementById("clicks");
const localStorageKey = "clickerClicks";

const sound = new Audio("Sounds/Click.wav");
sound.preservesPitch = false;
sound.volume = 0.5;

let clicks = 0;

//Increase count and save
function Click() {
    clicks++;

    UpdateDisplay();

    localStorage.setItem(localStorageKey, clicks)

    // Click sound
    let rate = (Math.random() * (0.75 - 1.25) + 1.25);
    sound.playbackRate = rate;
    sound.play();
}


// Show on page and title
function UpdateDisplay() {
    clickDisplay.innerHTML = `Clicks: <b id='number'>${clicks}</b>`;
    document.title = clicks + " clicks";
}

//Get clicks from local storage
function Load() {
    const val = parseInt(localStorage.getItem(localStorageKey));
    if (isNaN(val)) {
        clicks = 0;
    } else {
        clicks = val;
    }

    UpdateDisplay();
}

// Removes from local storage
function Reset() {
    localStorage.removeItem(localStorageKey);
    clicks = 0;
    UpdateDisplay();
}

Load();