fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((wizards) => {
    console.log(wizards);
  });
