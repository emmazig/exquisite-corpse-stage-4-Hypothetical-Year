let values;
let w = 3;

function setup() {
  createCanvas(800, 800);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
  frameRate(5000); 
  quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  await quickSort(arr, start, index - 1);
  await quickSort(arr, index + 1, end);
}

async function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(100); 
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function draw() {
  background(230,66,6);
  for (let i = 0; i < values.length; i++) {
    stroke(10);
    fill(0,150,235);
    rect(i * w, height - values[i], w, values[i]);
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

