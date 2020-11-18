function getName(node) {
    return node.name
}

function headNode(startAddress, collection) {
    return collection[startAddress]
}

function next(node, collection) {
    return collection[node.next]
}

function nodeAt(index, address, collection) {
    let currentNode = collection[address]

    for (let i = 1; i <= index; i++) {
        currentNode = next(currentNode, collection)
    }

    return currentNode
}

function addressAt(index, startAddress, collection) {
    let currentAddress = startAddress

    for (let i = 1; i <= index; i++) {
        currentAddress = collection[currentAddress].next
    }
    return currentAddress
}

function indexAt(node, collection, address) {
    let index = 0
    let currentAddress = address

    while (collection[currentAddress] !== node) {
        index++
        currentAddress = collection[currentAddress].next
    }

    return index
}

function insertNodeAt(index, newAddress, startAddress, collection) {
    const previousAddress = addressAt(index-1, startAddress, collection)
    const oldAddress = collection[previousAddress].next

    collection[previousAddress].next = newAddress
    collection[newAddress].next = oldAddress

    return collection
}

function deleteNodeAt(index, startAddress, collection) {
    const previousAddress = addressAt(index-1, startAddress, collection)
    const addressToRemove = collection[previousAddress].next
    const nextAddress = collection[addressToRemove].next
    

    collection[previousAddress].next = nextAddress

    return collection
}