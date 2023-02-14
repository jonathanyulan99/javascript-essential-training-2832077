/*
This is the backpack.js file -> which is another name for a MODULE. Typically you will see that
script.js can grow to be fairly large and thus in order to better work with it, it is necessary
to break up files apart and make it easier to work through. Note that in our last file exercise
the backpack.js was part of the script.js but here we have split up the files in order to provide
easier understanding of our file structure. 
*/

/* 
This backpack object is only scoped in the backpack.js and not how it was 
previously referenced in the last exercise file because the backpack object 
lived in the script.js which is different here as we have broken up those original
files.
*/

const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

//how to export this module and to be referenced in the script.js file
export default backpack;
