const form = document.getElementById('quiz');

const points = {
  animal: {
    hamster: {'C++': 3, 'P': 1},
    cat: {'J': 3, 'C++': 1},
    dog: {'P': 3, 'JS': 2},
    rat: {'C#': 3}
  },
  drink: {
    coffee: {'C++': 3, 'P': 2, 'J': 3},
    tea: {'P': 2, 'JS': 3, 'C#': 2}
  },
  season: {
    spring: {'JS': 2},
    summer: {'P': 2},
    autumn: {'J': 2},
    winter: {'C#': 2, 'C++': 2}
  },
  field: {
    gamedev: {'C#': 3, 'C++': 3, 'P': 1, 'J': 1},
    datascience: {'P': 4, 'J': 1},
    mobile: {'JS': 4, 'J': 3, 'C#': 1},
    emsys: {'C++': 4, 'P': 1},
    ai: {'P': 4, 'J': 1, 'C++': 1},
    bank: {'J': 3, 'P': 1, 'C++': 1}
  },
  'e/i/a': {
    e: {'JS': 3, 'P': 3},
    i: {'C++': 3, 'C#': 3},
    a: {'J': 3}
  },
  icecream: {
    chocolate: {'C#': 2},
    chocolatecoffee: {'J': 2},
    vanilla: {'P': 2},
    tiramisu: {'C++': 2},
    fruitsorbet: {'JS': 2}
  }
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const animalInputs = document.getElementsByName('animal');
  const drinkInputs = document.getElementsByName('drink');
  const seasonInputs = document.getElementsByName('season');
  const fieldInputs = document.getElementsByName('field');
  const eiaInputs = document.getElementsByName('e/i/a');
  const icecreamInputs = document.getElementsByName('icecream');

  const languagePoints = {
    'C#': 0,
    'C++': 0,
    'P': 0,
    'J': 0,
    'JS': 0
  };

function calculatePoints(inputs, question) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      const selectedValue = inputs[i].value;
      for (const language in points[question][selectedValue]) {
        languagePoints[language] += points[question][selectedValue][language];
      }
      break;
    }
  }
}

  calculatePoints(animalInputs, 'animal');
  calculatePoints(drinkInputs, 'drink');
  calculatePoints(seasonInputs, 'season');
  calculatePoints(fieldInputs, 'field');
  calculatePoints(eiaInputs, 'e/i/a');
  calculatePoints(icecreamInputs, 'icecream');

  let maxPoints = 0;
  let maxLanguage = '';

  for (const language in languagePoints) {
    if (languagePoints[language] > maxPoints) {
      maxPoints = languagePoints[language];
      maxLanguage = language;
    }
  }

  console.log('Language with the highest points sum:', maxLanguage);

if (maxLanguage == 'P') {
  window.location.href = 'python.html';
}

if (maxLanguage == 'C++') {
  window.location.href = 'cplusplus.html';
}

if (maxLanguage == 'C#') {
  window.location.href = 'csharp.html';
}

if (maxLanguage == 'J') {
  window.location.href = 'java.html';
}

if (maxLanguage == 'JS') {
  window.location.href = 'js.html';
}


  form.reset();
});
