document.getElementById('diaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const date = document.getElementById('date').value;
    const techniqueWell = document.getElementById('techniqueWell').value;
    const techniqueImprove = document.getElementById('techniqueImprove').value;
    const newLearnings = document.getElementById('newLearnings').value;

    // Create a new diary entry card
    const newEntry = document.createElement('div');
    newEntry.classList.add('diary-entry');
    newEntry.innerHTML = `
        <h3>${date}</h3>
        <p><strong>Technique that worked well:</strong> ${techniqueWell}</p>
        <p><strong>Technique to improve:</strong> ${techniqueImprove}</p>
        <p><strong>New Learnings:</strong> ${newLearnings}</p>
    `;

    // Append the new entry to the main section or another appropriate container
    document.querySelector('main').appendChild(newEntry);

    // Optionally, clear the form
    document.getElementById('diaryForm').reset();
});
