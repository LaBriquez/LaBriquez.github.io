onload = function() {
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

    const results = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get('results')));
    
    const total = Object.values(results).reduce((p, c) => p + c);

    const SeFs = {
        "Ti": ["Ne", "Se"], "Ne": ["Ti", "Fi"], "Si": ["Fe", "Te"], "Fe": ["Ni", "Si"],
        "Te": ["Ni", "Si"], "Ni": ["Fe", "Te"], "Se": ["Ti", "Fi"], "Fi": ["Ne", "Se"]
    };

    const MBTIs = {
        "Ti": "IXTP", "Te": "EXTJ", "Fe": "EXFJ", "Fi": "IXFP",
        "Ne": "ENXP", "Ni": "INXJ", "Se": "ESXP", "Si": "ISXJ"
    };

    const maxVal = Object.entries(results).sort((a, b) => b[1] - a[1])[0][0];

    let mbti = MBTIs[maxVal].replace("X", results[SeFs[maxVal][0]] > results[SeFs[maxVal][1]]? SeFs[maxVal][0][0] : SeFs[maxVal][1][0]);

    delete mbtiFunctions[mbti];

    let mbtiScores = Object.keys(mbtiFunctions).map(type => {
        return { type: type, score: mbtiFunctions[type].reduce((acc, func, index) => {
            return acc + (results[func] * (1.0 / (index + 1.0)));
        }, 0)};
    });
    
    const [sMBTI, tMBTI] = mbtiScores.sort((a, b) => b.score - a.score).slice(0, 3);

    document.body.innerHTML += "<table><tbody>" + Object.keys(results)
    .map(v => `<tr><td width="5%" class="type">${v}</td><td>
        <div class="mbtiValue" style="width: ${(results[v] / total) * 100}%;">${results[v]}</div></td></tr>`)
    .join("") + "</table></tbody>" + `</br><div id="result">MBTIs: ${mbti}</br>possibles : ${sMBTI.type}, ${tMBTI.type}</div>`;
}
