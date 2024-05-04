let start = 10;
let end = 100;
let exclude = 40;
for ( let i = start; i <= end; i += start )
{
    if ( exclude === i )
    {
        continue;
    }
    console.log( i );
}
// Output
//          10;
//          20;
//          30;
//          50;
//          60;
//          70;
//          80;
//          90;
//          100;
console.log( `#`.repeat( 20 ) );

//-----------------------------------------------------------------------
let start1 = 10;
let end1 = 0;
let stop1 = 3;

for ( let i = start1; i > end1; i-- )
{
    i < start1 ? console.log( Number( `${ end1 }${ i }` ) ) : "";
    if ( i === start1 ) { console.log( i ); }
    if ( i === stop1 )
    {
        break;
    }
}
// Output
//          10
//          09
//          08
//          07
//          06
//          05
//          04
//          03
console.log( `#`.repeat( 20 ) );

//-----------------------------------------------------------------------

let start2 = 1;
let end2 = 6;
let breaker2 = 2;

// Output
for ( let i = start2; i <= end2; i++ )
{
    console.log( i );
    for ( let j = breaker2; j < end2; j += 2 )
    {
        console.log( `--${ j }` );
    }
}
//  Output
//          1;
//          --2;
//          --4;
//          2;
//          --2;
//          --4;
//          3;
//          --2;
//          --4;
//          4;
//          --2;
//          --4;
//          5;
//          --2;
//          --4;
//          6;
//          --2;
//          --4;
console.log( `#`.repeat( 20 ) );
//-----------------------------------------------------------------------

let index = 10;
let jump = 2;
for ( let i = index; i > jump; i -= jump )
{
    console.log( i );
}
//          10;
//          8;
//          6;
//          4;
console.log( `#`.repeat( 20 ) );
//-----------------------------------------------------------------------
let friends = [ "Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh" ];
let letter = "a";
let bade = [];
for ( let i = 0; i < friends.length; i++ )
{
    if ( friends[ i ][ 0 ] != letter.toUpperCase() )
    {
        bade.push( friends[ i ] );
    }
}
for ( j = 0; j < bade.length; j++ )
{
    console.log( `"${ j + 1 } => ${ bade[ j ] }` );
}

// Output
"1 => Sayed";
"2 => Eman";
"3 => Mahmoud";
"4 => Osama";
"5 => Sameh";
console.log( `#`.repeat( 20 ) );
//-----------------------------------------------------------------------
let start3 = 0;
let swappedName = "elZerO";
let Arrow = [];
for ( let i = start3; i < swappedName.length; i++ )
{

    //first solution 
    //if (swappedName[i] == swappedName[i].toLowerCase()){
    //    Arrow.push(swappedName[i].toUpperCase())
    //}else {
    //    Arrow.push(swappedName[i].toLowerCase())
    //}


    // second solution 
    swappedName[ i ] === swappedName[ i ].toUpperCase() ?
        Arrow.push( swappedName[ i ].toLowerCase() )
        : Arrow.push( swappedName[ i ].toUpperCase() );
}
console.log( `"${ Arrow.join( "" ) }"` );
// Output
"ELzERo";
console.log( `#`.repeat( 20 ) );
//-----------------------------------------------------------------------
let start4 = 0;
let mix = [ 1, 2, 3, "A", "B", "C", 4 ];

// first solution to remove the first item in mix
mix.shift();

// second solution to remove the first item in mix but not love to do this solution 
//for ( let i = start4 +mix[start4]; i < mix.length; i++ )

for ( let i = start4; i < mix.length; i++ )
{
    if ( typeof mix[ i ] === "string" )
    {
        continue;
    }
    console.log( mix[ i ] );
}

// Output
//          2
//          3
//          4
console.log( `#`.repeat( 20 ) );
//------------------------------------------------------------------------