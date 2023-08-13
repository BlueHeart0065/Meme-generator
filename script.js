fetch("https://meme-api.com/gimme").then(response => {
        return response.json();
    }).then(Data => {
        var meme = document.getElementById("meme");
        meme.src = Data.url;
    }).catch(error => {
        console.error("Error fetching meme:", error);
    })


function getMeme() {
    fetch("https://meme-api.com/gimme").then(response => {
        return response.json();
    }).then(Data => {
        var meme = document.getElementById("meme");
        meme.src = Data.url;
    }).catch(error => {
        console.error("Error fetching meme:", error);
    })
}