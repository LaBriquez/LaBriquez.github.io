function putImgs() {
    const paths = Object.keys(letters);

    const i = Math.floor(Math.random() * paths.length);

    const choice = Math.random() < 0.25? 0 : 2 + Math.floor(Math.random() * 3);
    
    imgLetter.src = paths[i] + "/" + letters[paths[i]][choice];
    imgName.src = paths[i] + "/" + letters[paths[i]][1];
    imgBase.src = paths[i] + "/" + letters[paths[i]][0];

    imgBase.style.display = "none";
    imgName.style.display = "none";
}

function reveal() {
    imgBase.style.display = "block";
    imgName.style.display = "block";
}

onload = () => {
    [imgLetter, imgName, imgBase] = document.querySelectorAll("img");

    document.getElementById("random").onclick = putImgs;
    document.getElementById("reveal").onclick = reveal;

    // putImgs();
};