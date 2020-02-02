const getName = node => {
  return node.name;
}

const headNode = (linkedList, collection) => {
  let head = collection[linkedList];
  return head;
}

const next = (head, collection) => {
  return headNode(head,collection).next();
}