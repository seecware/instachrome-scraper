document.getElementsByClassName(INNER_RIGHT_BUTTON)[2].click() // For inner right button.
document.getElementsByClassName(OUTTER_RIGHT_BUTTON)[0].children[0].click() // For outter right button.   
document.getElementsByClassName(ACCORDION_LAST_IMG)[document.getElementsByClassName(ACCORDION_LAST_IMG).length-1].src

const INNER_RIGHT_BUTTON = " _9zm2"           // If exists, length is 3, else 2.
const OUTTER_RIGHT_BUTTON = " _aaqg _aaqh"    // 
const ACCORDION_LAST_IMG = "x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"

var images_container = []

const irc = () => {
      document.getElementsByClassName(INNER_RIGHT_BUTTON).length > 0 ? document.getElementsByClassName(INNER_RIGHT_BUTTON)[0].click() : document.getElementsByClassName(OUTTER_RIGHT_BUTTON).length > 0 ? document.getElementsByClassName(OUTTER_RIGHT_BUTTON)[0].children[0].click() : (flag = false, console.log("We are at the end:("));
};


const irc2 = () => {
  return document.getElementsByClassName(INNER_RIGHT_BUTTON).length > 0 
    ? (() => {
        document.getElementsByClassName(INNER_RIGHT_BUTTON)[0].click();
        return true;
      })() 
    : document.getElementsByClassName(OUTTER_RIGHT_BUTTON).length > 0 
        ? (() => {
            document.getElementsByClassName(OUTTER_RIGHT_BUTTON)[0].children[0].click();
            return true;
          })()
        : false;  // Correct placement of return false
};



var counter = 0;
// Select the container element
const container = document.querySelector('#target_container');

// Function to handle changes in the container's children
function handleChildAdditions(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      console.log('Children added:');
      mutation.addedNodes.forEach(node => {
        console.log(node); // Log the added node(s)
      });
      console.log('Total children now:', container.children.length);
    }
  } window.scrollTo(0, document.body.scrollHeight);
  document.getElementsByClassName(ACCORDION_LAST_IMG)[0].click();
  while 
}

// Create a MutationObserver to detect child additions
const observer = new MutationObserver(handleChildAdditions);

// Configure the observer to only watch for child additions
observer.observe(container, { childList: true });
