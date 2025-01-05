function reverseCollectionUsingApply() {
    return [].reverse.apply(arguments);
}
console.log(reverseCollectionUsingApply(1, 2, 3, 4, 5));

function reverseCollectionUsingCall() {
    return  [].reverse.call(arguments);
}
console.log(reverseCollectionUsingCall(1, 2, 3, 4, 5)); 