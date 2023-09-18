// Background service worker for the Mood Tracker extension

chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get('moodLog', (result) => {
        const moodLog = result.moodLog || [];
        const timestamp = Date.now();

        // Logic to prompt user to select mood and store it in the moodLog array

        // Example code to store the mood with the current timestamp
        moodLog.push({ timestamp, mood: 'happy' });

        chrome.storage.local.set({ moodLog }, () => {
            // Optional: Show a notification or display a message to confirm the mood was logged
        });
    });
});
