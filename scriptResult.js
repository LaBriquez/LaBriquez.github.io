onload = function() {
    const results = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get('results')));
    
    const total = Object.values(results).reduce((p, c) => p + c);

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

    const acti = {"Si": 0.5, "Se": 0.2, "Ni": 0.8, "Ne": 0.3};
    const judg = {"Ti": 0.5, "Te": 0.2, "Fi": 0.8, "Fe": 0.3};

    const activations = Object.entries(results).filter(value => acti[value[0]]);
    const judgement = Object.entries(results).filter(value => judg[value[0]]);

    const maxActi = activations.reduce((m, c) => c[1] > m[1]? c : m);
    const maxJudg = judgement.reduce((m, c) => c[1] > m[1]? c : m);

    const maxMbti = maxActi[1] > maxJudg[1]? maxActi : maxJudg;

    let first, second;

    if (maxActi[1] > maxJudg[1]) {
        const secondary = judgement.filter(m => m[0].charAt(1) != maxJudg[0].charAt(1));
        
        first = maxActi[0];
        second = secondary.reduce((m, c) => c[1] > m[1]? c : m)[0];
    } else {
        const secondary = activations.filter(m => m[0].charAt(1) != maxJudg[0].charAt(1));
        
        first = maxJudg[0];
        second = secondary.reduce((m, c) => c[1] > m[1]? c : m)[0];
    }

    let fMBTI;

    for (const [mbti, functions] of Object.entries(mbtiFunctions)) {
        if (functions[0] === first && functions[1] === second) {
            fMBTI = mbti;
            delete mbtiFunctions[mbti]; // Remove the MBTI type from the object
            break; // Exit loop once the match is found
        }
    }

    let mbtiScores = Object.keys(mbtiFunctions).map(type => {
        return { type: type, score: mbtiFunctions[type].reduce((acc, func, index) => {
            return acc + (results[func] * (1.0 / (index + 1.0)));
        }, 0)};
    });
    
    const [sMBTI, tMBTI] = mbtiScores.sort((a, b) => b.score - a.score).slice(0, 3);

    document.body.innerHTML += "<table><tbody>" + Object.keys(results)
    .map(v => `<tr><td width="5%" class="type">${v}</td><td>
        <div class="mbtiValue" style="width: ${(results[v] / total) * 100}%;">${results[v]}</div></td></tr>`)
    .join("") + "</table></tbody>" + `</br><div id="result">MBTIs: ${fMBTI}</br>possibles : ${sMBTI.type}, ${tMBTI.type}</div>`;
}