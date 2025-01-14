const CLASS_TO_TOGGLE = 'accordion__icon--minus'; // A class defined in the stylesheet
const ACCORDION_ICON_CLASS = '.accordion__icon'; // Specific class in the HTML (from `_includes/accordion.html`)!
const COLLAPSE_STATES_ARR = ['show.bs.collapse', 'hide.bs.collapse']; // BOOTSTRAP 4 specific collapse states
const COLLAPSE_JQUERY_SELECTOR = '.collapse:not(.navbar-collapse)';  // BOOTSTRAP 4 jQuery selector for callapseable divs

function toggleClass(el) {
  return el.classList.toggle(CLASS_TO_TOGGLE);
}

function findAccordionIcon(parent) {
  const thisAccordionIcon = parent.querySelector(ACCORDION_ICON_CLASS);

  toggleClass(thisAccordionIcon);
}

function onCollapseChangeFunction(stateChange) {
  $(COLLAPSE_JQUERY_SELECTOR).on(stateChange, function (e) { // BOOTSTRAP 4 METHOD: https://getbootstrap.com/docs/4.3/components/collapse/#events
    if (e.target.parentNode.parentNode.id === 'accordion') { // FILTERS OUT COLLAPSE STATE_CHANGES THAT ARE NOT INSIDE AN ACCORDION
      const COLLAPSE_PARENT = e.target.parentElement; // SPECIFIC TO THE BOOTSTRAP 4 COLLAPSE EVENT
      //console.log(e);
      findAccordionIcon(COLLAPSE_PARENT);
    }
  });
}

function loopOverArr(arr) {
  let len = arr.length;

  for (var i = 0; i < len; i++) {
    onCollapseChangeFunction(arr[i]);
  }
}

function accordion() {
  if ( !document.querySelector('[id^="collapse"]') && !document.querySelector('.accordion__icon') ) { // These ID's and CLASSES are unique to the _includes/accordion.html template.
    return; // Bail out if the accordion is NOT in the page!
  }

  loopOverArr(COLLAPSE_STATES_ARR);
}

export default accordion;
