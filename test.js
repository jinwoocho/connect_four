function ThreeDiffColorOne(){
    if (right) {
        if(right[yValue] == playerClicked + 1){
            if(left && left[yValue] == playerClicked + 2){
                freeze();
            }
            if(nextright && nextright[yValue] == playerClicked + 2){
                freeze();
            }
        }
        if(right[yValue] == playerClicked + 2){
            if(left && left[yValue] == playerClicked + 1){
                freeze();
            }
            if(nextright && nextright[yValue] == playerClicked + 1){
                freeze();
            }
        }
    }

    if (left) {
        if(left[yValue] == playerClicked +1){
            if(nextleft && nextleft[yValue] == playerClicked +2) {
                freeze();
            }
        }
        if(left[yValue] == playerClicked +2){
            if(nextleft && nextleft[yValue] == playerClicked +1) {
                freeze();
            }
        }
    }
}

function ThreeDiffColorTwo() {
    if (right) {
        if(right[yValue] == playerClicked + 1){
            if(nextright && nextright[yValue] == playerClicked - 1){
                freeze();
            }
            if(left && left[yValue] == playerClicked - 1 ){
                freeze();
            }
        }
        if(right[yValue] == playerClicked - 1){
            if(nextright && nextright[yValue] == playerClicked + 1){
                freeze();
            }
            if(left && left[yValue] == playerClicked + 1){
                freeze();
            }
        }
    }

    if (left) {
        if(left[yValue] == playerClicked + 1){
            if(nextleft && nextleft[yValue] == playerClicked - 1) {
                freeze();
            }
        }
        if(left[yValue] == playerClicked - 1){
            if(nextleft && nextleft[yValue] == playerClicked +1) {
                freeze();
            }
        }
    }
}

function ThreeDiffColorThree() {
    if (right) {
        if(right[yValue] == playerClicked - 1){
            if(nextright && nextright[yValue] == playerClicked - 2){
                freeze();
            }
            if(left && left[yValue] == playerClicked - 2 ){
                freeze();
            }
        }
        if(right[yValue] == playerClicked - 2){
            if(nextright && nextright[yValue] == playerClicked - 1){
                freeze();
            }
            if(left && left[yValue] == playerClicked - 1){
                freeze();
            }
        }
    }

    if (left) {
        if(left[yValue] == playerClicked -1){
            if(nextleft && nextleft[yValue] == playerClicked - 2) {
                freeze();
            }
        }
        if(left[yValue] == playerClicked - 2){
            if(nextleft && nextleft[yValue] == playerClicked - 1) {
                freeze();
            }
        }
    }
}

function ThreeDiffColors(player) {
    var playerClicked = parseInt(clickedArr[xValue][yValue]),
        right = clickedArr[xValue + 1],
        left = clickedArr[xValue - 1],
        nextright = clickedArr[xValue + 2],
        nextleft = clickedArr[xValue - 2],
        checkpoint1 = null,
        checkpoint2 = null;

    if (player === 0) {
        checkpoint1 = playerClicked + 1;
        checkpoint2 = playerClicked + 2;
    } else if (player === 1) {
        checkpoint1 = playerClicked + 1;
        checkpoint2 = playerClicked - 1;
    } else {
        checkpoint1 = playerClicked - 1;
        checkpoint2 = playerClicked - 2;
    }

    if (right) {
        if(right[yValue] == checkpoint1){
            if(left && left[yValue] == checkpoint2){
                freeze();
            }
            if(nextright && nextright[yValue] == checkpoint2){
                freeze();
            }
        }
        if(right[yValue] == checkpoint2){
            if(left && left[yValue] == checkpoint1){
                freeze();
            }
            if(nextright && nextright[yValue] == checkpoint1){
                freeze();
            }
        }
    }

    if (left) {
        if(left[yValue] == checkpoint1){
            if(nextleft && nextleft[yValue] == checkpoint2) {
                freeze();
            }
        }
        if(left[yValue] == checkpoint2){
            if(nextleft && nextleft[yValue] == checkpoint1) {
                freeze();
            }
        }
    }
}