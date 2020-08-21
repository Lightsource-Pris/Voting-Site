const voteHeading = document.querySelector('#votes-quantity')
const upvotebutton = document.querySelector('#upvote')
const downvotebutton = document.querySelector('#downvote')
upvotebutton.addEventListener('click',function(){Const vote = Number(voteHeading.textContent) 
    voteHeading.textContent = Vote + 1})
downvotebutton.addEventListener('click', function () {
    Const vote = Number(voteHeading.textContent)
    voteHeading.textContent = Vote - 1})
    
