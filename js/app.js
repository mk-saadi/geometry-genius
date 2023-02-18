// ! UTILITY

// # utility 1
function triFinalResult(){
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
}

// # utility 2
function recFinalResult(){
    const wRectangleField = document.getElementById('w-rectangle');
    const wRectangleString= wRectangleField.value;
    const wRectangle= parseFloat(wRectangleString);

    wRectangleField.value = '';

    const lRectangleField = document.getElementById('l-rectangle');
    const lRectangleString= lRectangleField.value;
    const lRectangle= parseFloat(lRectangleString);

    lRectangleField.value = '';

    const rectangleCalculationResult= wRectangle* lRectangle;

    const rectangleField= document.getElementById('rectangle-result');
    const rectangleString= rectangleField.innerText;
    const rectangleResult = parseFloat(rectangleString);

    const newRectangleResult= rectangleCalculationResult+ rectangleResult;
    rectangleField.innerText= newRectangleResult;
}

// ! UTILITY

// # 1 btn-triangle
document.getElementById('btn-triangle').addEventListener('click', function(){

    triFinalResult();
});

// # 2 btn-rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){

    recFinalResult();
});

// # btn-parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const bParallelogram= parseInt(10);
    const hParallelogram= parseInt(12);

    const parallelogramResult= hParallelogram* bParallelogram;

    const parallelogramField= document.getElementById('parallelogram-result');
    const parallelogramString= parallelogramField.innerText;
    const parallelogram = parseFloat(parallelogramString);

    const parallelogramFinal= parallelogramResult+ parallelogram;
    parallelogramField.innerText= parallelogramFinal;
});

// # btn-rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const bRhombus= parseInt(16);
    const hRhombus= parseInt(8);

    const rhombusResult= 0.5* hRhombus* bRhombus;

    
    const rhombusField= document.getElementById('rhombus-result');
    const rhombusString= rhombusField.innerText;
    const rhombus = parseFloat(rhombusString);
    
    const rhombusFinal= rhombusResult+ rhombus;
    rhombusField.innerText= rhombusFinal;
    
});

// # btn-pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const bPentagon= parseInt(6);
    const hPentagon= parseInt(10);

    const pentagonResult= hPentagon* bPentagon;

    const pentagonField= document.getElementById('pentagon-result');
    const pentagonString= pentagonField.innerText;
    const pentagon = parseFloat(pentagonString);

    const pentagonFinal= pentagonResult+ pentagon;
    pentagonField.innerText= pentagonFinal;
});

// # btn-ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const bEllipse= parseInt(10);
    const hEllipse= parseInt(4);

    const ellipseResult= 3.14* hEllipse* bEllipse;

    const ellipseField= document.getElementById('ellipse-result');
    const ellipseString= ellipseField.innerText;
    const ellipse = parseFloat(ellipseString);

    const ellipseFinal= ellipseResult+ ellipse;
    ellipseField.innerText= ellipseFinal;
});