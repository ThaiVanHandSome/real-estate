const header = $('.header')
const sliderWrapper = $('.slider-wrapper')
const aboutContainer = $('.about__container')

var customerCount = 489;
var projectCount = 100;
var successCount = 35;

const checkBtn = $('.check');
const blockCount = $('.count');
const customerCountContainer = $('.customer-count');
const projectCountContainer = $('.project-count');
const successCountContainer = $('.success-count');

function setAssending() {
    setInterval(() => {
        customerCount+=5;
        projectCount++;
        successCount++;
        if(customerCount <= 965)
            customerCountContainer.innerHTML = customerCount;
        if(projectCount <= 225)
            projectCountContainer.innerHTML = projectCount;
        if(successCount <= 121)
            successCountContainer.innerHTML = successCount;
    }, 20)
}

//Scroll
isAdded = false

// Count
isSuccess = false
window.onscroll = function() {

    //Header
    if(header.getBoundingClientRect().top < -50) {
        if(!isAdded) {
            header.classList.add('header__scroll')
            isAdded = true
        }
    } else if(sliderWrapper.getBoundingClientRect().top === 0) {
        header.classList.remove('header__scroll')
        isAdded = false
    }

    // Count
    if(window.innerHeight - 150 > blockCount.getBoundingClientRect().top) {
        if(!isSuccess) {
            setAssending();
            isSuccess = true;
        }
    }
    
}