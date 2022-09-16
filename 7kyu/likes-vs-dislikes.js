// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Like, Dislike, Nothing come from Preloaded

const likeOrDislike = buttons => {
    let status = 'Nothing'
    buttons.map((e, i) => status == e ? status = 'Nothing' : status = e);
    return status;
}

console.log(likeOrDislike(['Like', 'Like']));
