/*
Написать класс, реализующий список.
Предусмотреть методы поиска, вставки, удаления,
изменения элемента и определения длины списка.

Использовать настройки strict и noImplicitAny.
Избегать утверждения типов (операторы as и non-null assertion).
 */

class List<T> {
    length = 0;
    data: { [index: number]: T } = {};

    public get(index: number): T | undefined {
        return this.data[index];
    }

    public push(item: T): void {
        this.data[this.length] = item;
        this.length++;
    }

    public pop(): T | undefined {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    public delete(index: number): T | undefined {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    private shiftItems(index: number): void {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }


    public update(index: number, newValue: T): void {
        this.data[index] = newValue;
    }

    public indexOf(item: T): number {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                return i;
            }
        }
        return -1;
    }

    public clear(): void {
        this.length = 0;
        this.data = {};
    }
}


const list = new List<string>();

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

list.clear();

console.log(list.length);

