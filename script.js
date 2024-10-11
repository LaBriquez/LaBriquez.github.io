const mbtiFunctions = {
    "INTP": ["Ti", "Ne", "Si", "Fe"],
    "ENTP": ["Ne", "Ti", "Fe", "Si"],
    "INFJ": ["Ni", "Fe", "Ti", "Se"],
    "ENFJ": ["Fe", "Ni", "Se", "Ti"],
    "INTJ": ["Ni", "Te", "Fi", "Se"],
    "ENTJ": ["Te", "Ni", "Se", "Fi"],
    "INFP": ["Fi", "Ne", "Si", "Te"],
    "ENFP": ["Ne", "Fi", "Te", "Si"],
    "ISFJ": ["Si", "Fe", "Ti", "Ne"],
    "ESFJ": ["Fe", "Si", "Ne", "Ti"],
    "ISTJ": ["Si", "Te", "Fi", "Ne"],
    "ESTJ": ["Te", "Si", "Ne", "Fi"],
    "ISFP": ["Fi", "Se", "Ni", "Te"],
    "ESFP": ["Se", "Fi", "Te", "Ni"],
    "ISTP": ["Ti", "Se", "Ni", "Fe"],
    "ESTP": ["Se", "Ti", "Fe", "Ni"]
};

function shuffle(array) {
    const newArray = Array.from(array);
    
    for (let i = 0; i < newArray.length; i++) {
        const j = Math.floor(Math.random() * newArray.length);
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    console.log(newArray);

    return newArray;
}

onload = function() {
    questions = shuffle(questions);

    document.getElementById("questions").innerHTML = questions
    .map((q, i) => `${i + 1}) ${questions[i][1]}</br>
        <div class="questions">
        <input type="radio" value="${i},0" name="q${i}"/>
        <input type="radio" value="${i},1" name="q${i}"/>
        <input type="radio" value="${i},2" name="q${i}"/>
        <input type="radio" value="${i},3" name="q${i}"/>
        <input type="radio" value="${i},4" name="q${i}"/>
        <input type="radio" value="${i},5" name="q${i}"/>
        <input type="radio" value="${i},6" name="q${i}"/>
        </div>`).join("") + "</br><button>send</button>";
    
    document.querySelector("button").addEventListener("click", function() {
        const results = {"Si": 0.0, "Se": 0.0, "Ni": 0.0, "Ne": 0.0, "Ti": 0.0, "Te": 0.0, "Fi": 0.0, "Fe": 0.0};

        for (const inputs of document.querySelectorAll(".questions")) {
            const [checked] = Array.from(inputs.querySelectorAll("input")).filter(v => v.checked);
            
            if (!checked) continue;

            const [q, ratio] = checked.value.split(",");

            if (questions[q][0][0]) {
                results[questions[q][0][0]] += 6.0 - Number(ratio);
            }

            results[questions[q][0][1]] += Number(ratio);
        }

        const total = Object.values(results).reduce((p, c) => p + c);

        let mbtiScores = Object.keys(mbtiFunctions).map(type => {
            return { type: type, score: mbtiFunctions[type].reduce((acc, func, index) => {
                const weight = 1.0 / (index + 1.0);
                return acc + (results[func] * weight);
              }, 0)};
        });
        
        const [fMBTI, sMBTI, tMBTI] = mbtiScores.sort((a, b) => b.score - a.score).slice(0, 3);

        document.body.innerHTML += "<table width='600px'><tbody>" + Object.keys(results)
        .map(v => `<tr><td width="5px">${v}</td><td>
            <div style="background-color: #00c5ff;width: ${(results[v] / total) * 100}%;">${results[v]}</div></td></tr>`)
        .join("") + "</table></tbody>" + `</br>MBTIs: ${fMBTI.type}</br>possibles : ${sMBTI.type}, ${tMBTI.type}`;
    });
};
