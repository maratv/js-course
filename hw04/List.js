/*
Написать класс, реализующий список.
Предусмотреть методы поиска, вставки, удаления,
изменения элемента и определения длины списка.
 */

class List {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        this._shiftItems(index);
        return deletedItem;
    }

    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    update(index, newValue) {
        this.data[index] = newValue;
    }

    // Получить индекс элемента
    indexOf(item) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return i;
            }
        }
        return -1;
    }

    // Очистить список
    clear() {
        this.length = 0;
        this.data = {};
    }
}


const list = new List();

list.push('a');
list.push('b');
list.push('c');

console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));

console.log(list.length);

list.delete(1);

console.log(list.get(0));
console.log(list.get(1));

console.log(list.length);

list.update(1, 'd');

console.log(list.get(1));
console.log(list.indexOf('d'));


console.log(list.length);

list.clear();

console.log(list.length);

