# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
The pod request access helps the user to enter the email address and verify that the email address is valid or not. To make the page responsive, media queries are implemented on three different breaking points. 

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"
- Receive an success message when the form passes validation.

### Screenshot

**Desktop View**
![Desktop View](./screenshots/desktop.png)

**Desktop Interactive State View**
![Desktop Interactive State View](./screenshots/desktop-interactive-state.png)

**Tablet View**
![Tablet View](./screenshots/tablet.png)

**Mobile View**
![Mobile View](./screenshots/mobile.png)


### Links

- GitHub URL: [GitHub URL](https://your-solution-url.com)
- Live Site URL: [Live Site UR](https://your-live-site-url.com)

## My process
For this solution, I started by creating the logic first and then started designing the solution. If the logic is completed successfully, it is easier to give the design to it. 

Then I proceeded with the HTML and CSS part of the solution.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS positions
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This challenge help me explore the positioning in CSS. I understood the usage of relative and absolute in the best way possible. 

I also learnt the usecase of pseudo elements **::before** and **::after**. It is easier to make the content visible on the image using these pseudo elements. This was my first challenge to implement **mix-blend-mode** and it was quite interesting to play around with different options.

I started the code with mobile-view first, but I didn't notice that the option list was displayed differently in different device settings. I highly recommend to use CSS positioning while dealing with such HTML elements.

### Continued development

I would likely to develop more such challenges as these helps to make your fundamentals strong. Developing challenges daily help you to improve your insitincts whenever we see a design. These challenges give us the idea how to plan in different designs. 

### Useful resources

- [Resource 1](https://www.freecodecamp.org/news/regular-expressions-for-beginners/) - This is the best ever article to read the usage of regular expression in JavaScript. It really helps to build the strategy to validate email.
- [Resource 2](https://stackoverflow.com/questions/1457849/how-to-remove-the-border-highlight-on-an-input-text-element) - These Stack Overflow answers help me to understand the style of the form elements using different states. In this code, I have implemented the use of  **"input:focus"** to get the desired output.
- [Resource 3](https://coder-coder.com/background-image-opacity/) - This article explains the use of psuedo elements while using image as background and maintain its opacity without affecting the content.

## Author

- Frontend Mentor - [@GaganpreetKaurGill](https://www.frontendmentor.io/profile/GaganpreetKaurGill)
