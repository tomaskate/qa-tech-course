function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < count; i++) {
    // Generate random number between 100 and 1000
    let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    // Check if generated number is even or odd
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  // Calculate percentages
  let evenPercentage = (evenCount / count) * 100;
  let oddPercentage = (oddCount / count) * 100;

  // Output to console
  console.log('Total generated numbers:' + count);
  console.log('Even numbers:' + evenCount);
  console.log('Odd numbers: ' + oddCount);
  console.log('Percentage of even numbers: ' + evenPercentage.toFixed(2) + '%');
  console.log('Percentage of odd numbers: ' + oddPercentage.toFixed(2) + '%');
}

// Example
checkProbabilityTheory(25);
