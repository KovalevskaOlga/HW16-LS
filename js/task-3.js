class Storage {
    constructor(items) {
        this.items = items
    }

    // отримання поточних товарів масиву
    getItems() {
        return this.items
    }

    // додавання якогось нового товару до масиву
    addItem(item) {
        return this.items.push(item)
    }
    
    // видалення товару з масиву якщо додано той який повторюється
    removeItem(item) {
        return this.items = this.items.filter((currentItem) => currentItem !== item);
    }
}

const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems();
console.log(items); //['Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор']

storage.addItem('Дроїд');
console.log(storage.items); // ['Нанітоіди', 'Пролонгер', 'Залізні жупи', 'Антигравітатор', 'Дроїд']

storage.removeItem('Пролонгер'); // Коли спробували додати 'Пролонгер' то він видалився з масиву, бо вже там був  
console.log(storage.items); //['Нанітоіди', 'Залізні жупи', 'Антигравітатор', 'Дроїд']