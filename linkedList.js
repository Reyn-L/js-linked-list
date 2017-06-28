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

    }else{
    } while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  function remove(number) {
    let currentNode = get(number);
    let previousNode = get(number - 1);
    console.log(previousNode);
    for (let i = 0; i < number; i++){
      previousNode.next = currentNode.next;
    }
      if(currentNode.next === null){
        return false;
      }
    // while(number < currentNode.length) {
    //   if (currentNode[number].next === null){
    //     return false;
    //   }
    //   number++;
    // }

    return currentNode.next;
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

  function insert() {

  }

  return {
    getHead : getHead,
    getTail : getTail,
    add : add,
    remove : remove,
    get : get,
    insert : insert
  };
}
// console.log(ll.getHead()); //null
// ll.add('cat');
// console.log(ll.getHead()); //cat
// console.log(ll.getTail()); //cat
// ll.add('Dog');
// console.log(ll.getTail()); //dog
// ll.insert('bird',1);
// console.log(ll.get(1)); //bird
// ll.remove(2);
// console.log(ll.getTail()); //bird