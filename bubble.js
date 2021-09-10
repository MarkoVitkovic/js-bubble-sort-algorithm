//implementacija bubble sorta

//kreiranje funkcije bblSort
function bblSort(arr){

    for(var i = 0; i < arr.length; i++){

        //posljednji i element je vec na mjestu
        for(var j = 0; j < (arr.length -i -1); j++){
            
            //provjera dali je element u prethodnoj iteraciji veci nego u sljedecoj
            if(arr[j] > arr[j + 1]){

                //ako je to tocno, zamjeni elemente
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    //printanje sortiranog niza
    console.log("Sortirani niz: ",arr);
}


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
    console.log("Sortirani niz(optimizirani): ",arr);
}

//nesortirani niz
var arr = [243, 45, 23, 356, 3, 5346, 35, 5];


//prosljedivanje niza funkcijama
bblSort(arr);
bubbleSort(arr);
