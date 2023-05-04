function getNumber(resolutionTime, resolveCallback, rejectCallback, fulfilledCallback) {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        if (rejectCallback) {
          rejectCallback(`Rejected: ${randomNumber}`);
        }
      } else {
        if (resolveCallback) {
          resolveCallback(`Resolved: ${randomNumber}`);
        }
      }
      
      if (fulfilledCallback) {
        fulfilledCallback();
      }
    }, resolutionTime);
  }
  
  // Usage example:
  getNumber(
    1000, 
    result => console.log(result), 
    error => console.error(error), 
    () => console.log('Promise fulfilled')
  );
  