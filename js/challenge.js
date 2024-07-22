document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    let isPaused = false;
    const counterElement = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesContainer = document.getElementById('likes');

    const updateCounter = () => {
        counterElement.textContent = counter;
    };

    let timer = setInterval(() => {
        if (!isPaused) {
            counter++;
            updateCounter();
        }
    }, 1000);

    plusButton.addEventListener('click', () => {
        counter++;
        updateCounter();
    });

    minusButton.addEventListener('click', () => {
        counter--;
        updateCounter();
    });

    heartButton.addEventListener('click', () => {
        const like = document.createElement('li');
        like.textContent = `Counter at ${counter} has been liked!`;
        likesContainer.appendChild(like);
    });

    pauseButton.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    });


    const comm=document.getElementById("submit")
    const comment=document.getElementById("comment-form")

    comment.addEventListener('submit',(e)=>{
        e.preventDefault();
        const feedback=document.getElementById("comment-input").value;
        

        const feed=document.createElement("li")
        feed.textContent=feedback;
        const commentList=document.getElementById("list")
        commentList.appendChild(feed)
        comment.reset();

    })


});