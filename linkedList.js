/*jshint esversion: 6*/
/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){

   let linkedList = null;

   function getHead() {
    return linkedList;
  }

  function getTail() {
    let currentNode = linkedList;

    if(!currentNode) {
      return null;

    } while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function add(value) {
    let node = {
      value : value,
      next: null
    };

    let currentNode = linkedList;

    if (currentNode === null) {
      linkedList = node;
      return node;

    } while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  function remove(number) {
    let currentNode = linkedList;
    let previousNode = linkedList;
    let count = 0;

    if(number === 0) {
      linkedList = currentNode.next;
    }
    while(count < number && currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    previousNode.next = currentNode.next;
    if(count < number && !currentNode.next) {

      return false;
    }
  }

  function get(number) {
    let currentNode = linkedList;

    for (let i = 0; i < number; i++) {
      if(currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function insert(value, number) {
    let currentNode = get(number);
    let previousNode = get(number -1);
    let node = {
      value: value,
      next : null
    };
    if(number === 0) {
      node.next = linkedList;
      linkedList = node;
    } else if (number < 0) {
      return false;
    } else if (currentNode.next === null) {
      node.next = currentNode;
      previousNode.next = node;
      return node;
    } else if (currentNode) {
      node.next = currentNode;
      previousNode.next = node;
      return node;
    }else {
      return false;
    }
  }

return {
  getHead : getHead,
  getTail : getTail,
  add : add,
  remove : remove,
  get : get,
  insert : insert
};

//console.log(getHead()); //null
//add('cat');
//console.log(getHead()); //cat
//console.log(getTail()); //cat
//add('Dog');
//console.log(getTail()); //dog
//insert('bird',1);
// console.log(get(1)); //bird
//remove(2);
//console.log(getTail()); //bird
}

