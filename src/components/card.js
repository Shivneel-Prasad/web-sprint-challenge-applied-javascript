  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios"

const Card = (article) => {
  // creating a list of new elements
  const newCard = document.createElement('div')
  const newTitle = document.createElement('div')
  const newAuthor = document.createElement('div')
  const pictureBox = document.createElement('div')
  const images = document.createElement('img')
  const authorsName = document.createElement('span')

  // adding classList to each elements
  newCard.classList.add('card')
  newTitle.classList.add('headline')
  newAuthor.classList.add('author')
  pictureBox.classList.add('img-container')

  // creating a structure of elements
  newCard.appendChild(newTitle)
  newCard.appendChild(newAuthor)
  newAuthor.appendChild(pictureBox)
  newAuthor.appendChild(authorsName)
  pictureBox.appendChild(images)

  // adding information
  newTitle.textContent = article.headline;
  authorsName.textContent = article.authorName;
  images.src = article.authorPhoto;

  // adding an event listener for click events
  newCard.addEventListener('click', () => {
    console.log(article.headline);
  })
  // Return
  return newCard;
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles')
    .then(response => {
      const cardDetails = response.data.articles;
        console.log(cardDetails);
      
      for(let i = 0; i < cardDetails.javascript.length; i++){
        const articleData = cardDetails.javascript[i]
        const newCard = document.querySelector(selector)
        newCard.appendChild(Card(articleData))
      }
      for(let i = 0; i < cardDetails.bootstrap.length; i++){
        const articleData = cardDetails.bootstrap[i]
        const newCard = document.querySelector(selector)
        newCard.appendChild(Card(articleData))
      }
      for(let i = 0; i < cardDetails.technology.length; i++){
        const articleData = cardDetails.technology[i]
        const newCard = document.querySelector(selector)
        newCard.appendChild(Card(articleData))
      }
      for(let i = 0; i < cardDetails.jquery.length; i++){
        const articleData = cardDetails.jquery[i]
        const newCard = document.querySelector(selector)
        newCard.appendChild(Card(articleData))
      }
      for(let i = 0; i < cardDetails.node.length; i++){
        const articleData = cardDetails.node[i]
        const newCard = document.querySelector(selector)
        newCard.appendChild(Card(articleData))
      }
    })
}

export { Card, cardAppender }
