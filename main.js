function* idGenerator() {
    let id = 0;

    while (true) {
        yield `id_${id++}`;
    }
}

const id = idGenerator();

console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);