  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const Header = (title, date, temp) => {
  const newDiv = document.createElement('div')
    newDiv.classList.add('header')

    // create an header element
  const newDate = document.createElement('span')
    newDate.classList.add('date')
    newDate.textContent = date;
    newDiv.appendChild(newDate)

    // create a Title element
  const newTitle = document.createElement('h1')
    newTitle.classList.add('title')
    newTitle.textContent = title;
    newDiv.appendChild(newTitle)

    // create a Temp element
  const newTemp = document.createElement('span')
    newTemp.classList.add('temp')
    newTemp.textContent = temp;
    newDiv.appendChild(newTemp)

  return newDiv;
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = (selector) => {
    const mainContainer = document.querySelector(selector);
      mainContainer.append(Header('The Lambda Times', 'January 6, 2021', '26°'));
    
      return mainContainer;
  }

export { Header, headerAppender }