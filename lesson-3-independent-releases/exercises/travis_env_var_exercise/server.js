
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}
const favoriteFood = process.env.Pizza;
console.log(`My favorite food is ${favoriteFood}`);

main();
