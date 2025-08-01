const likeButtons = document.querySelectorAll('.like-btn');
const dislikeButtons = document.querySelectorAll('.dislike-btn');
const voteCounts = document.querySelectorAll('.vote-count');

likeButtons.forEach((btn, index) => {
  let likes = 0;
  let dislikes = 0;
  let liked = false; // to check if already liked
  let disliked=false;

  btn.addEventListener('click', (e) => {
     e.stopPropagation(); // Prevent flip
    if (!liked) {
       
      likes++;
      btn.textContent = '❤️'; // filled red heart
      btn.style.color = 'red'; // optional if you use emoji
      liked = true;
    } else {
      likes--;
      btn.textContent = '🤍'; // empty heart
      btn.style.color = 'black'; // revert color
      liked = false;
    }
    voteCounts[index].textContent = `Likes: ${likes} | Dislikes: ${dislikes}`;
  });

  dislikeButtons[index].addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent flip
    if(!disliked){
    dislikes++;
    disliked=true;
    }
    else{
       
        dislikes--;
        disliked=false;
    }
    voteCounts[index].textContent = `Likes: ${likes} | Dislikes: ${dislikes}`;
  });
});


document.querySelectorAll('.card-inner').forEach(card => {
  card.addEventListener('click', function(event) {
    if(event.target.closest('.no-flip')) return; // prevents flip if Purchase button is clicked
    card.classList.toggle('is-flipped');
  });
});


 
function togglePurchase(event, btn) {
  event.stopPropagation(); // stops the flip
  const section = btn.nextElementSibling; // finds the purchase-options div next to the button
  if (section) {
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
}

 const menuIcon = document.querySelector("#menuIcon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
