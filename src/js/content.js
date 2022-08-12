const elements = [
    {
        ranking: 4,
        title: "The Eclipse",
        releasedYear: 2009,
        directer: "Conor McPherson",
        myRating: 7,
        imgUrl: "../clone-coding/src/img/04_the-eclipse.png",
        comment: "",
    },
    {
        ranking: 105,
        title:"Blue Ruin",
        releasedYear: 2013,
        directer: "eremy Saulnier",
        myRating: 9,
        imgUrl: "./src/img/105_blue-ruin.png",
        comment:"When I discover a film I feel is really special in some way, I usually drag as many people to the theater as possible to see it with me before it’s banished to the streaming realm forever. I’m always excited by the challenge of choosing people I’m sure will enjoy it as much as I do, but I’m not always right. With Under the Skin (2013), I had about a 50% success rate with people either really loving it or really hating it. With Let the Right One In (2008), I hit a near 100% success rate with the only complaint being having to read subtitles (which is clearly not a complaint about the movie and says more about the viewer). With Blue Ruin I hit my first home run (did I use that sportsball metaphor correctly?). Now, I’ve only shared it with about 4–5 people, but across the board everyone really loved the movie. Director Jeremy Saulnier needs to write the handbook for making great films on a small budget. The budget for this film was around $420,000, which is just remarkable. I’ve never made a film, but this just seems like an impossible challenge. I’d love to know how they pulled it off. I’m so glad they did.",
    },
    {
        ranking: 72,
        title:"Irreversible",
        releasedYear: 2002,
        directer: "Gaspar Noé",
        myRating: 9,
        imgUrl: "./src/img/72_irreversible.png",
        comment: "Note for those of you that are familiar with this film: No, I didn’t choose that scene. I just couldn’t. I’ve only watched it once, and even then in 15–30 second increments with sanity breaks. Outside of real-life violence (which I can’t stand witnessing) that scene was probably the hardest of any scene from any film for me to get through. Hell, apparently the actress herself hasn’t ever watched the scene all the way through. Note for the rest of you: For the first time in Best Horror Scenes history, I’m actually going to recommend you don’t watch this scene unless you’re completely prepared and in a place where nobody else can see your screen. It’s extraordinarily disturbing, the camera work is nauseating and disorienting, the violence is very realistic, and there are a lot of flashes of real S&M. For those that are not familiar with this film (if you’re here it’s hard for me to imagine you haven’t at least heard of it — it’s truly infamous): Irreversible is incredibly difficult watch, and definitely not for everyone. Director Gaspar Noé makes sure of that at every turn. Firstly, it’s filmed in reverse. The film begins with the final act, and each segment you watch actually happened after the segment that follows it (yes, he was inspired by Memento, but the concept is taken to a whole new level here). Secondly, the camera often appears to be hanging from a spring. It dips and spins and twirls and swings and wobbles like a dying moth, all the while catching flashes of incredibly disturbing imagery (including a shot of the director himself masturbating). Lastly, Irreversible features what is, in my experience, quite possibly one of the most talked about scenes in “horror” film history (while this isn’t really considered traditional horror, it is fucking horrifying like no other film you’ll ever see). If you can make it through that scene without looking away, you may want to consider professional help. Director Gaspar Noé is either the most nihilistic filmmaker of all time, or an epic, long-running joke on the film world. He makes a point of being controversial and subversive (just look at the title sequence for Enter the Void alone). Of making the viewer work just as hard as he has to make it to the end of his films. But regardless of how you feel about him — and people tend to feel very strongly one way or the other — you cannot deny the fact that this film is one of the most horrifying and disturbing ever (legally) released."
    }
];

const contents = document.querySelector("#right-contents");

function paintContent(element) {
    const total = document.createElement("div");
    const title_line = document.createElement("div");
    const name = document.createElement("h2");
    name.innerText = element.title;
    title_line.appendChild(name);
    const directer = document.createElement("h3");
    directer.innerText = element.directer;
    title_line.appendChild(directer);
    title_line.className = "title";
    total.appendChild(title_line);

    const ranking = document.createElement("div");
    ranking.innerText = `#${element.ranking}`;
    ranking.className = "ranking";
    total.appendChild(ranking);

    const movie = document.createElement("img");
    movie.src = element.imgUrl;
    total.appendChild(movie);


    const contents_line = document.createElement("div");
    const contents_line_end = document.createElement("div");
    const explanation = document.createElement("h4");
    explanation.className = "expanation";
    explanation.innerHTML = element.comment;
    contents_line.appendChild(explanation);

    const b = document.createElement("span");
    b.innerHTML = "-B";
    const rating = document.createElement("h4");
    rating.innerText = `My rating: ${element.myRating}/10`;

    contents_line_end.appendChild(b);
    contents_line_end.appendChild(rating);

    contents_line.appendChild(contents_line_end);
    total.appendChild(contents_line);

    const comment_line = document.createElement("div");
    const noComments = document.createElement("h4");
    noComments.innerText = `No Comments`;
    comment_line.appendChild(noComments);
    const leaveAComment = document.createElement("h4");
    leaveAComment.className = "leaveAComment";
    leaveAComment.innerText = `Leave a Comment`;
    comment_line.appendChild(leaveAComment);
    total.appendChild(comment_line);
    total.className = "article"
    contents.appendChild(total);
}


// main //

elements.forEach(paintContent);