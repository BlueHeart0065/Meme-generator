
var btn = document.getElementById("button");
btn.onclick = getMeme;


function getMeme(){
    fetch("https://api.imgflip.com/caption_image").then(response => {
        return response.json();
    }).then(Data => {
        var meme = document.getElementById("meme");
        meme.src = Data.data.memes.url;
    })
}