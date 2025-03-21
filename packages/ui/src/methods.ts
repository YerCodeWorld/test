
function getInitials(text: string): string {
    const initials = [];
    for (const word of text.split(' ')) {
        initials.push(word);
    }
    return initials.join();
}

const s: string = getInitials('Never again');
console.log(s);