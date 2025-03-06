

const addStringNumbers = (stringNums) => {
    // even if no input is passed, we will return 0
    if (!stringNums?.trim()) return 0;
    let delimiter = /[,\n]+/;
    if (stringNums.startsWith('//')) {
        // This means that we are changing the delimiter
        const delimiterEnd = stringNums.indexOf('\n');
        // because the startsWith has 2 characters, we need to start the substring
        // at character 3 which is (2) as it is 0 indexed
        delimiter = stringNums.substring(2, delimiterEnd);
        stringNums = stringNums.substring(delimiterEnd + 1);
        console.log(delimiter, stringNums);
    }



}

module.exports = addStringNumbers;