const specialChar = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r-   \n"];
const spinner = function (specialChar) {
  let time = 100;
  for (const c of specialChar) {
    setTimeout(() => {
      process.stdout.write(c);
    }, time);
    time += 200;
  }
};

spinner(specialChar);
