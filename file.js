// Define arrays containing different pieces of data
const subjects = ['The cat', 'The dog', 'The rabbit', 'The bird'];
const verbs = ['jumped over', 'chased', 'ate', 'played with'];
const objects = ['the ball', 'the mouse', 'the food', 'the toy'];

// Function to generate a random index within the length of an array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to generate a random message
function generateMessage() {
  const subjectIndex = getRandomIndex(subjects);
  const verbIndex = getRandomIndex(verbs);
  const objectIndex = getRandomIndex(objects);

  const subject = subjects[subjectIndex];
  const verb = verbs[verbIndex];
  const object = objects[objectIndex];

  return `${subject} ${verb} ${object}.`;
}

// Generate and output a random message
console.log(generateMessage());
