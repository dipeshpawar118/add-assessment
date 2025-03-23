function add(numbers) {
    if (!numbers) return 0; // Handle empty string case

    return numbers
        .split(',')
        .map(num => parseInt(num.trim(), 10) || 0) // Convert to integer, handle whitespace & non-numeric values
        .reduce((sum, num) => sum + num, 0); // Sum up the numbers
}

module.exports = add; // Export for testing
