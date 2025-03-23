function add(numbers) {
    if (!numbers) return 0; // Handle empty string case
    let delimiter = ',';

        // Check if the input has a custom delimiter
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = delimiterMatch[1]; // Extract delimiter
            numbers = numbers.split(delimiter+'\n')[1]; // Extract numbers after newline
        }

     // Replace all newline characters with the delimiter (comma or custom)
     numbers = numbers.replace(/\n/g, delimiter);

    const numArray = numbers
    .split(delimiter)
    .map(num => parseInt(num.trim(), 10) || 0); // Convert to numbers and handle non-numeric values


    // Check for negative numbers
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0); // Sum up numbers
}

module.exports = add; // Export for testing
