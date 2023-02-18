// ! UTILITY

// # utility 1
// function triangleFinalResult(){

// }

// ! UTILITY

// # 1 btn-triangle
document.getElementById('btn-triangle').addEventListener('click', function(){

    const bTriangleField = document.getElementById('b-triangle');
    const bTriangleString= bTriangleField.value;
    const bTriangle= parseFloat(bTriangleString);

    bTriangleField.value = '';

    const hTriangleField = document.getElementById('h-triangle');
    const hTriangleString= hTriangleField.value;
    const hTriangle= parseFloat(hTriangleString);

    hTriangleField.value = '';

    const triangleCalculationResult= 0.5* bTriangle* hTriangle;

    const triangleField= document.getElementById('triangle-result');
    const triangleString= triangleField.innerText;
    const triangleResult = parseFloat(triangleString);

    const newTriangleResult= triangleCalculationResult+ triangleResult;
    triangleField.innerText= newTriangleResult;
});

// # 2 btn-rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){

});