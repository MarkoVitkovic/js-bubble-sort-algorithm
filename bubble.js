//implementacija optimiziranog bubble sorta

//kreiranje funkcije bubbleSort
function bubbleSort(arr){
    var i, j;
    var len = arr.length;
    var isSwapped = false;

    for(i = 0; i < len; i++){
        isSwapped = false;

        for(j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        //ako dva elementa nisu zamjenjena prekini
        if(!isSwapped){
            break;
        }
    }

    //ispisi array
    console.log(arr);
}

var arr = [243, 45, 23, 356, 3, 5346, 35, 5];

bubbleSort(arr)