// Creating the initial array of student names
const students = ['Jane', 'Kayla', 'Tim']

// Prompting the user to input three more names
for (let i = 0; i < 3; i++){
    const name = prompt('Enter a name');
    students.push(name);
}

// Iterating through the array and console logs each element
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
