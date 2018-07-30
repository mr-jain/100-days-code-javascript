function mergeSort(array){
    if(array.length < 2) return array;
    var mid = Math.floor(array.length / 2);
    var a = array.slice(0, mid);
    var b = array.slice(mid);
    return merge(mergeSort(a), mergeSort(b));
}

function merge(a, b){
    var result = [];
    var i = 0;
    var j = 0;
    while (i < a.length && j < b.length){
        if(a[i] < b[j]){
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    while(i < a.length){
        result.push(a[i]);
        i++;
    }
    while(j < b.length){
        result.push(b[j]);
        j++
    }

    return result;
}

array = [1000, -94, -115, 300, 22];
array = mergeSort(array);
console.log(array);