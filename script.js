document.addEventListener("DOMContentLoaded", function () {
    const selectButton = document.getElementById("selectButton");
    const choiceSelect = document.getElementById("choice");
    const agentImage = document.getElementById("agent-image");
    const agentNameDiv = document.getElementById("agent-name");
    const challengeResultDiv = document.getElementById("challenge-result");

    // Define the arrays in JavaScript
    const agents = [
        "Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Harbor",
        "Sage", "Sova", "Phoenix", "Jett", "Reyna", "Kayo", "Neon",
        "Breach", "Skye", "Raze", "Astra", "Yoru", "Deadlock", "Gekko", "Iso"
    ];

    const challenges = [
        "Classic Only", "Shotgun Only", "No Automatic Guns", "Gun Game", "RPG"
    ];

    const challengeDescriptions = [
        "Classic Only: Use a classic for one whole game.",
        "Shotgun Only: Only use shotguns for a whole game.",
        "No Automatic Guns: You can only use guns with single click firing.",
        "Gun Game: Progress through different weapons with each kill until you win.",
        "RPG: You start a game classic only, and every time you win a game, you unlock the next gun. If you lose three games in a row, you are reset to classic."
    ];

    selectButton.addEventListener("click", function () {
        const choice = choiceSelect.value;

        // Hide both the agent and challenge result containers initially
        agentNameDiv.style.display = "none";
        agentImage.style.display = "none";
        challengeResultDiv.style.display = "none";

        switch (choice) {
            case "1":
                // Generate a random agent
                const randomAgentIndex = Math.floor(Math.random() * agents.length);
                const selectedAgent = agents[randomAgentIndex];

                // Set the agent's name
                agentNameDiv.textContent = `Randomly selected Valorant agent: ${selectedAgent}`;

                // Set the agent's image (convert agent name to lowercase)
                const agentImageName = selectedAgent.toLowerCase() + ".png";
                agentImage.src = `images/${agentImageName}`;
                agentImage.alt = `${selectedAgent} Image`;

                // Show the agent result and hide the challenge result
                agentNameDiv.style.display = "block";
                agentImage.style.display = "block";
                break;

            case "2":
                // Generate a random challenge
                const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
                const selectedChallenge = challenges[randomChallengeIndex];
                const challengeDescription = challengeDescriptions[randomChallengeIndex];

                // Set the challenge result
                challengeResultDiv.innerHTML = `
                    <div class="result-heading">Challenge</div>
                    <div class="result-content">
                        <p>Randomly selected Valorant challenge: ${selectedChallenge}</p>
                        <p>Description: ${challengeDescription}</p>
                    </div>
                `;

                // Show the challenge result and hide the agent result
                challengeResultDiv.style.display = "block";
                break;

            case "3":
                // Randomly select both an agent and a challenge
                const randomAgentIndexCombined = Math.floor(Math.random() * agents.length);
                const randomChallengeIndexCombined = Math.floor(Math.random() * challenges.length);
                const selectedAgentCombined = agents[randomAgentIndexCombined];
                const selectedChallengeCombined = challenges[randomChallengeIndexCombined];
                const combinedChallengeDescription = challengeDescriptions[randomChallengeIndexCombined];

                // Set the agent's name
                agentNameDiv.textContent = `Randomly selected Valorant agent: ${selectedAgentCombined}`;

                // Set the agent's image
                const agentImageCombined = selectedAgentCombined.toLowerCase() + ".png";
                agentImage.src = `images/${agentImageCombined}`;
                agentImage.alt = `${selectedAgentCombined} Image`;

                // Set the challenge result
                challengeResultDiv.innerHTML = `
                    <div class="result-heading">Challenge</div>
                    <div class="result-content">
                        <p>Randomly selected Valorant challenge: ${selectedChallengeCombined}</p>
                        <p>Description: ${combinedChallengeDescription}</p>
                    </div>
                `;

                // Show both the agent and challenge results
                agentNameDiv.style.display = "block";
                agentImage.style.display = "block";
                challengeResultDiv.style.display = "block";
                break;

            default:
                // Hide both the agent and challenge result containers for an invalid choice
                agentNameDiv.style.display = "none";
                agentImage.style.display = "none";
                challengeResultDiv.style.display = "none";
        }
    });
});
