let mIx = [ 1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o" ];
let collect = mIx.map( function ( ele )
{
    return typeof ele !== "number" ? ele : "";
} ).reduce( function ( acc, ele )
{
    return acc + ele;
} );
console.log( collect );
// Elzero

//second solution
let miX = [ 1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o" ];
let aff = miX.map( ( ele ) => ( isNaN( parseInt( ele ) ) ? ele : "" ) ).reduce( ( a, b ) => a + b );

console.log( aff );

//third solution
let mixv = [ 1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o" ];
let qaa = mixv.map( function ( aaa )
{
    return isNaN( parseInt( aaa ) ) ? aaa : "";
} ).reduce( function ( aaa, d )
{
    return aaa + d;
} );
console.log( qaa );

//fourth solution
let mix = [ 1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o" ];
let w = mix.map( ( a ) => isNaN( parseInt( a ) ) ? a : "" )
    .reduce( ( x, c ) => x + c );
console.log( w );



//fiveth solution
let Mix = [ 1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o" ];
let q = Mix.map( ( ele ) =>
{
    if ( isNaN( parseInt( ele ) ) )
    {
        return ele;
    } else
    {
        return "";
    }
}
).reduce( ( s, d ) => s + d );

console.log( q );
// -----------------------------------------------------------------
let myString = "EElllzzzzzzeroo";
let sds = myString.split( "" ).filter( function ( acc, ele, arr )
{
    return arr.indexOf( acc ) === ele;
} ).reduce( ( acc, ele ) => acc + ele );
console.log( sds );
// Elzero
// -----------------------------------------------------------------
let myArray = [ "E", "l", "z", [ "e", "r" ], "o" ];
let wq = myArray
    .reduce( ( acc, ele ) => acc.concat( ele ), [] )
    .reduce( ( acc, ele ) => acc + ele );
console.log( wq );
// Elzero
// -----------------------------------------------------------------
let numsAndStrings = [ 1, 10, -10, -20, 5, "A", 3, "B", "C" ];
let we = numsAndStrings
    .filter( ( a ) => typeof a === "number" ? a : "" )
    .map( ( a ) => -a );
console.log( we );
// [-1, -10, 10, 20, -5, -3]
// -----------------------------------------------------------------
let nums = [ 2, 12, 11, 5, 10, 1, 99 ];
let ads = nums.reduce( ( acc, cur ) =>
    cur % 2 === 0 ? acc * cur : acc + cur
    , 1 );
console.log( ads );
// 500