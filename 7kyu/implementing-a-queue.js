class Queue {
    constructor(){
        this.collection = [];
    }
    
    enqueue(item) {
        return this.collection.push(item);
    }

    dequeue() {
        this.collection.shift();
    }

    size() {
        return this.collection.length;
    }
}

let instance = new Queue();

instance.enqueue('badger')
instance.enqueue('fox')
instance.enqueue('moose')
instance.enqueue('hen')
instance.dequeue()

console.log(instance.size());
console.log(instance)

























// class Queue {
//     constructor() {
//         this.collection = [];
//     }

//     enqueue(item) {
//         this.collection.push(item);
//     }

//     dequeue(item) {
//         return this.collection.shift(item);
//     }

//     size() {
//         return this.collection.length;
//     }
// }

// let instance = new Queue();

// console.log(instance.size());

// instance.enqueue('racoon');
// instance.enqueue('badger');
// instance.enqueue('fox');
// instance.enqueue('deer');
// instance.enqueue('foal');
// instance.enqueue('owl');

// instance.dequeue('racoon');
// instance.dequeue('badger');
// instance.dequeue('fox');
// instance.dequeue('deer');

// console.log(instance);
// console.log(instance.size());
