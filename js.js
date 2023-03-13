function delay(time) {
    return new Promise((resolve, reject) => {
      if (time < 0) {
        reject(new Error('Invalid time: Time must be a positive number.'));
      } else {
        setTimeout(() => {
          resolve(`Delay of ${time} ms completed.`);
        }, time);
      }
    });
  }
  
  // Call the function and handle the resolved or rejected value
  delay(2000)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
  // Call the function with an invalid argument
  delay(-1000)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error.message);
    });