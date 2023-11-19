const buttons = document.querySelectorAll('[data-carousel-button]')
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]')

    const activeSlide = slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex >= 0 && newIndex <= 2){
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    }
    
    if (newIndex < 0) newIndex = 0
    if (newIndex > slides.children.length) newIndex === slides.children.length 

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (vw <= 768) {
      if (newIndex === 0) slides.style.transform = 'translateX(0)';
      if (newIndex === 1) slides.style.transform = 'translateX(calc(-85% - 20px))';
      if (newIndex === 2) slides.style.transform = 'translateX(calc(-170% - 40px))';
    }
    if (vw > 768) {
      if (newIndex === 0) {
        slides.style.transform = 'translateX(0)';
        slides.children[0].style.zIndex = '3';
        slides.children[1].style.zIndex = '2';
        slides.children[2].style.zIndex = '1';
        slides.children[0].style.transform = 'translateY(0)';
        slides.children[1].style.transform = 'translateY(0)';
        slides.children[2].style.transform = 'translateY(0)';
      }
      if (newIndex === 1) {
        slides.style.transform = 'translateX(0)';
        slides.children[0].style.zIndex = '1';
        slides.children[1].style.zIndex = '3';
        slides.children[2].style.zIndex = '2';
        slides.children[0].style.transform = 'translateY(0)';
        slides.children[1].style.transform = 'translateY(-20px)';
        slides.children[2].style.transform = 'translateY(0)';
      }      
      if (newIndex === 2) {
        slides.style.transform = 'translateX(0)';
        slides.children[0].style.zIndex = '1';
        slides.children[1].style.zIndex = '2';
        slides.children[2].style.zIndex = '3';
        slides.children[0].style.transform = 'translateY(0)';
        slides.children[1].style.transform = 'translateY(0)';
        slides.children[2].style.transform = 'translateY(-20px)';
      }
    }

  })
})

const dropdownButtons = document.querySelectorAll('[data-dropdown-button]')
dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const questionsContainer = button.closest('[data-dropdown-container]')
    const allQuestions = questionsContainer.querySelectorAll('.question');

    // this is the question of which button has been pressed
    const question = button.closest('[data-dropdown-question]')

    if (button.dataset.dropdownButton === 'plus') {
      // hide the plus button
      question.querySelector('.bi-plus-lg').style.display = 'none'
      // show the minus button
      question.querySelector('.bi-dash-lg').style.display = 'flex'      

      // set the height of the open dropdown
      question.querySelector('.answer-container').style.height = `${question.querySelector('.answer-container').scrollHeight}px`
    }
    if (button.dataset.dropdownButton === 'minus') {
      // show plus button
      question.querySelector('.bi-plus-lg').style.display = 'flex';
      // hide minus button
      question.querySelector('.bi-dash-lg').style.display = 'none';

      // close the open dropdown
      question.querySelector('.answer-container').style.height = `0px`
    }
  })
})
