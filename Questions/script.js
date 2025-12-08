function shuffle(array) {
    const newArray = Array.from(array);
    
    for (let i = 0; i < newArray.length; i++) {
        const j = Math.floor(Math.random() * newArray.length);
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

onload = function() {    
    questions = shuffle(questions);

    document.getElementById("questions").innerHTML = questions
    .map((q, i) => `<div class="bgQuestion"><span class="theQuestion">${q.question}</span></br><br>
    <div class="questions">${new Array(7).fill(null).map((v, k) => {
        return `<label class="custom-radio">
            <input type="radio" value="${i},${k}" name="q${i}"/>
            <span></span>
        </label>`
    }).join('')}
    </div></div>
    `).join("<br>") + "</br><button>send</button>";

    
    document.querySelector("button").addEventListener("click", function() {
        const results = {"Si": 0.0, "Se": 0.0, "Ni": 0.0, "Ne": 0.0, "Ti": 0.0, "Te": 0.0, "Fi": 0.0, "Fe": 0.0};

        for (const inputs of document.querySelectorAll(".questions")) {
            const [checked] = Array.from(inputs.querySelectorAll("input")).filter(v => v.checked);
            
            if (!checked) continue;

            const [q, ratio] = checked.value.split(",");

            results[questions[q].type] += Number(ratio);
        }

        window.location.href = `results.html?results=${encodeURIComponent(JSON.stringify(results))}`;
    });
};