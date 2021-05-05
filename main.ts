DLPLmatrix.definitionMatrix(nrMatrix.mitte, enumhwMatrix.m2, 0)
DLPLmatrix.definitionMatrix(nrMatrix.links, enumhwMatrix.m1, 2)
DLPLmatrix.schreibeText(
nrMatrix.mitte,
"ABC",
0xff0000,
true
)
DLPLmatrix.schreibeText(
nrMatrix.links,
"ABC",
0xff0000,
false
)
basic.forever(function () {
	
})
