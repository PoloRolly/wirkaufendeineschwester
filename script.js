const jokes = [
    "Im Saarland ist das Familienoberhaupt das höchste, ernsthaft!",
    "Wie nennt man einen Minecraft Server welcher verspätet Released, TheFl ... ich meine SynapseMC",
    "MaximalFlame.de TOLLE SEITE",
    "ERROR 404 ... Sisterfister Flame ist eingetroffen",
    "Einmal Sister zum mitnehmen"
];

function showJoke() {
    const form = document.getElementById('sister-form');
    if (form.checkValidity()) {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        document.getElementById('joke-text').textContent = randomJoke;
        document.getElementById('joke-modal').classList.remove('hidden');
    } else {
        form.reportValidity();
    }
}

function closeModal() {
    document.getElementById('joke-modal').classList.add('hidden');
}