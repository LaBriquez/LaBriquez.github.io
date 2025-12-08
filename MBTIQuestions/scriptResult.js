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

    const total = Object.values(results).flat().reduce((p, c) => p + c);

    const SeFs = {
        "Ti": ["Ne", "Se"], "Ne": ["Ti", "Fi"], "Si": ["Fe", "Te"], "Fe": ["Ni", "Si"],
        "Te": ["Ni", "Si"], "Ni": ["Fe", "Te"], "Se": ["Ti", "Fi"], "Fi": ["Ne", "Se"]
    };

    const MBTIs = {
        "Ti": "IXTP", "Te": "EXTJ", "Fe": "EXFJ", "Fi": "IXFP",
        "Ne": "ENXP", "Ni": "INXJ", "Se": "ESXP", "Si": "ISXJ"
    };

    const imgsValues = {"T": "F", "F": "T", "N": "S", "S": "N"};

    const valuesFunctions = Object.entries(results).sort((a, b) => (b[1][0] + b[1][1]) - (a[1][0] + a[1][1]));
    const maxVal = valuesFunctions[0][0];
    
    const second = results[SeFs[maxVal][0]].reduce((a, b) => a + b) > results[SeFs[maxVal][1]].reduce((a, b) => a + b)? SeFs[maxVal][0][0] : SeFs[maxVal][1][0];

    let mbti = MBTIs[maxVal].replace("X", second);

    delete mbtiFunctions[mbti];

    let mbtiScores = Object.keys(mbtiFunctions).map(type => {
        return { type: type, score: mbtiFunctions[type].reduce((acc, func, index) => {
            return acc + (results[func].reduce((a, b) => a + b) * (1.0 / (index + 1.0)));
        }, 0)};
    });

    const [sMBTI, tMBTI] = mbtiScores.sort((a, b) => b.score - a.score).slice(0, 3);

    document.getElementById("images").innerHTML += Array.from(`${maxVal[0]}${second}${imgsValues[second]}${imgsValues[maxVal[0]]}`, l => `<img src="${l}.jpg">`);

    document.getElementById("result").innerHTML += "<table><tbody>" + Object.keys(results)
    .map(v => `<tr><td width="5%" class="type">${v}</td><td width="4%" class="type">${results[v][0] + results[v][1]}</td><td>
        <div style="width: ${(results[v][0] / total) * 100}%;background-color: #008f30ff;">${results[v][0]}</div><div style="width: ${(results[v][1] / total) * 100}%;background-color: #8f0000ff;">${results[v][1]}</div></td></tr>`)
    .join("") + "</table></tbody>" + `</br><div id="result">MBTIs: ${mbti}</br>possibles : ${sMBTI.type}, ${tMBTI.type}</div>`;
};
/*
    const total = Object.values(results).reduce((p, c) => p + c);

    const SeFs = {
        "Ti": ["Ne", "Se"], "Ne": ["Ti", "Fi"], "Si": ["Fe", "Te"], "Fe": ["Ni", "Si"],
        "Te": ["Ni", "Si"], "Ni": ["Fe", "Te"], "Se": ["Ti", "Fi"], "Fi": ["Ne", "Se"]
    };

    const colors = {
        "Ti": "#ffb900", "Ne": "#523fffff", "Si": "#00c3ffff", "Fe": "#046d00ff",
        "Te": "#ff1f1f", "Ni": "#720063ff", "Se": "#ac2a00", "Fi": "#ffffff"
    };

    const MBTIs = {
        "Ti": "IXTP", "Te": "EXTJ", "Fe": "EXFJ", "Fi": "IXFP",
        "Ne": "ENXP", "Ni": "INXJ", "Se": "ESXP", "Si": "ISXJ"
    };

    const imgsValues = {"T": "F", "F": "T", "N": "S", "S": "N"};

    const valuesFunctions = Object.entries(results).sort((a, b) => b[1] - a[1]);
    const maxVal = valuesFunctions[0][0];

    const second = results[SeFs[maxVal][0]] > results[SeFs[maxVal][1]]? SeFs[maxVal][0][0] : SeFs[maxVal][1][0];
    let mbti = MBTIs[maxVal].replace("X", second);

    delete mbtiFunctions[mbti];

    let mbtiScores = Object.keys(mbtiFunctions).map(type => {
        return { type: type, score: mbtiFunctions[type].reduce((acc, func, index) => {
            return acc + (results[func] * (1.0 / (index + 1.0)));
        }, 0)};
    });
    
    const [sMBTI, tMBTI] = mbtiScores.sort((a, b) => b.score - a.score).slice(0, 3);

    document.getElementById("images").innerHTML += Array.from(`${maxVal[0]}${second}${imgsValues[maxVal[0]]}${imgsValues[second]}`, l => `<img src="${l}.jpg">`);

    document.getElementById("result").innerHTML += "<table><tbody>" + Object.keys(results)
    .map(v => `<tr><td width="5%" class="type">${v}</td><td>
        <div style="width: 10%;background-color: #008f30ff;">10</div><div style="width: 10%;background-color: #8f0000ff;">10</div></td></tr>`) //<div style="width: ${(results[v] / total) * 100}%;background-color: #008f30ff;">${results[v]}</div></td></tr>`)
    .join("") + "</table></tbody>" + `</br><div id="result">MBTIs: ${mbti}</br>possibles : ${sMBTI.type}, ${tMBTI.type}</div>`;
}*/

