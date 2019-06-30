const choice = (items) => items[Math.floor(items.length * Math.random())];

const remove = (items, item) => {
    let a = items.findIndex(i => i === item);
    items.splice(a, 1);
    return a === -1 ? undefined : items;
}

export {
    choice, remove
}