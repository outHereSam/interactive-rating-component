# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Github Repository](https://github.com/outHereSam/interactive-rating-component)
- Live Site URL: [Github Pages Live Site](https://outheresam.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript


### What I learned

I was able to put my knowledge of JavaScript DOM manipulation into practice with this project. The challenge I encountered which I was able to solve was the fact that I wanted only one rating to be selected at a time. I was able to achieve this by looping through the rating numbers twice, the first to add an event handler for click and the second to check if the selected state is applied to any of the elements at the time the current element is clicked, if so, then remove the class on said element. This way, only one rating item could be selected at a time.

```js
for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener('click', () => {
        for (let j = 0; j < ratingNumbers.length; j++) {
            if (ratingNumbers[j].classList.contains('active')) {
                ratingNumbers[j].classList.remove('active')
            }
        }
        ratingNumbers[i].classList.add('active');
        let currentRating = ratingNumbers[i].innerText;
        getRating(currentRating);
    });
}
```

### Continued development

With the knowledge gained from this project, I can apply it to other projects which involved manipulating the DOM and getting data from DOM elements.


## Author

- Github - [Samuel Larbi Danquah](https://github.com/outHereSam/)
- Twitter - [@builtbysam](https://www.twitter.com/builtbysam)


## Acknowledgments

Huge thanks to my mentor Emmanuel Asaber for giving me some insights on how to implement some solutions.

