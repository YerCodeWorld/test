/**
 * Get The initials of the user's name. This is supposed to be transformed into an
 * algorithm that constructs the profile photo based on thi.
* */
function getInitials(text: string): string {
    const initials = [];
    for (const word of text.split(' ')) {
        initials.push(word);
    }
    return initials.join();
}

// Test
const s: string = getInitials('Never again');
console.log(s);

