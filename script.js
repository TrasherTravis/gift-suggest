

function validateForm(event) {
  let age = document.getElementById('age').value;
  let name = document.getElementById('name').value;

  

  if(name === "" ) {
    document.getElementById('name_error').classList.remove('hidden');
  } else {
      document.getElementById('name_error').classList.add('hidden');
  }


  if (age>=100  || age === "") {
      document.getElementById('phone_error').classList.remove('hidden');
  } else {
      document.getElementById('phone_error').classList.add('hidden');
      
  }

  
  event.preventDefault();
}


document.getElementById('submit').addEventListener('click', validateForm);





  const addcolumn = document.querySelector("#submit");
  
  addcolumn.addEventListener("click",columnresult);


  function columnresult () {
    
    let result = document.querySelector(".search-result");
     
    resultdisplay(result);
  }

 
function resultdisplay(result){
  
  if(result.style.display == "block") {
    result.style.display = "none";
  }
  else{
    result.style.display = "block";
  }
}

  let hobbies = document.getElementById("hobbies");
  let listArray = [];

  var checkBoxes = document.querySelectorAll(".checkbox");

  for(let checkbox of checkBoxes) {
    checkbox.addEventListener("click", function(){
      if(this.checked === true) {
        listArray.push(this.value);
        hobbies.value = listArray.join(" , ");
      }
      else {
        listArray = listArray.filter(e => e !== this.value);
        hobbies.value = listArray.join(" , ");
      }
    })
  }








/*  ACCORDION  */

(function (window) {
  "use strict";
  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }
  var classie = {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass,
  };
  if (typeof define === "function" && define.amd) {
    define(classie);
  } else {
    window.classie = classie;
  }
})(window);
var $ = function (selector) {
  return document.querySelector(selector);
};
var accordion = $(".accordion");
accordion.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  if (e.target && e.target.nodeName == "A") {
    var classes = e.target.className.split(" ");
    if (classes) {
      for (var x = 0; x < classes.length; x++) {
        if (classes[x] == "accordionTitle") {
          var title = e.target;
          var content = e.target.parentNode.nextElementSibling;
          classie.toggle(title, "accordionTitleActive");
          if (classie.has(content, "accordionItemCollapsed")) {
            if (classie.has(content, "animateOut")) {
              classie.remove(content, "animateOut");
            }
            classie.add(content, "animateIn");
          } else {
            classie.remove(content, "animateIn");
            classie.add(content, "animateOut");
          }
          classie.toggle(content, "accordionItemCollapsed");
        }
      }
    }
  }
});
