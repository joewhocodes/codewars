// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

likes = names => {
    const like = ' like this';
    switch (names.length) {
        case 0:
            return 'no one' + ' likes this';
            break;
        case 1:
            return names + ' likes this';
            break;
        case 2:
            names.splice(1, 0, ' and ');
            return names.join('') + like;
            break;
        case 3:
            names.splice(2, 0, ' and ');
            names.splice(1, 0, ', ');
            return names.join('') + like;
        default:
            const otherNames = names.length - 2;
            names.length = 2;
            names.splice(2, 0, ' and ');
            names.splice(1, 0, ', ');
            return names.join('') + `${otherNames} others${like}`;
            break;
    }
}

console.log(likes(['Peter', 'Alex']));
