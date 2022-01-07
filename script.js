let quotes = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", "If you can't explain it to a six year old, you don't understand it yourself.", "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.", "Logic will get you from A to Z; imagination will get you everywhere.", "Life is like riding a bicycle. To keep your balance, you must keep moving.", "Anyone who has never made a mistake has never tried anything new."];

document.getElementById("Button").onclick = function() {
    let number = Math.floor(Math.random() * 8)
    let quote = quotes[number]

    document.getElementById("Answer").innerHTML = quote
}