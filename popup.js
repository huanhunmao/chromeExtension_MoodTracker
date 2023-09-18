document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to mood buttons
    document.getElementById('happy').addEventListener('click', logMood);
    document.getElementById('sad').addEventListener('click', logMood);
    document.getElementById('angry').addEventListener('click', logMood);

    // Load and display mood log
    // chrome.storage.local.get('moodLog', (result) => {
    //     const moodLog = result.moodLog || [];
    //     const moodLogElement = document.getElementById('mood-log');

    //     moodLog.forEach((entry) => {
    //         const li = document.createElement('li');
    //         li.textContent = new Date(entry.timestamp).toLocaleString() + ' - ' + getEmoji(entry.mood);
    //         moodLogElement.appendChild(li);
    //     });
    // });
});

function logMood (event) {
    const moodLogElement = document.getElementById('mood-log');
    const li = document.createElement('li');
    li.textContent = new Date().toLocaleString() + ' - ' + getEmoji(event.target.id);
    moodLogElement.appendChild(li);
    // const mood = event.target.id;
    // chrome.action.setBadgeText({ text: getEmoji(mood) });

    // Optional: You can customize the behavior when a mood is selected, such as displaying a confirmation message.
}

function getEmoji (mood) {
    switch (mood) {
        case 'happy':
            return '\uD83D\uDE04';
        case 'sad':
            return '\uD83D\uDE22';
        case 'angry':
            return '\uD83D\uDE21';
        default:
            return '';
    }
}
