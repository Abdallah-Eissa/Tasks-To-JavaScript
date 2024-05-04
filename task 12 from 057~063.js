function sayHello ( theName, theGender )
{
    //theGender === "Male"
    //    ? console.log( `Hello Mr ${ theName }` )
    //    : theGender === "Female"
    //        ? console.log( `Hello Mrs ${ theName }` )
    //        : console.log( `Hello ${ theName }` );
    if ( theGender === "Male" )
    {
        console.log( `Hello Mr ${ theName }` );
    } else if ( theGender === "Female" )
    {
        console.log( `Hello Miss ${ theName }` );
    } else if ( theGender === undefined )
    {
        console.log( `Hello ${ theName }` );
    }

}

// Needed Output
sayHello( "Osama", "Male" ); // "Hello Mr Osama"
sayHello( "Eman", "Female" ); // "Hello Miss Eman"
sayHello( "Sameh" ); // "Hello Sameh"
// ------------------------------------------------------------------------------

function calculate ( firstNum, secondNum, operation )
{
    if ( secondNum === undefined && operation === undefined )
    {
        console.log( `Second Number Not Found` );
    } else if ( operation === undefined )
    {
        console.log( firstNum + secondNum );
    } else if ( operation === "add" )
    {
        console.log( firstNum + secondNum );
    } else if ( operation === 'subtract' )
    {
        console.log( firstNum - secondNum );

    } else if ( operation === 'multiply' )
    {
        console.log( firstNum * secondNum );
    }
}
// Needed Output
calculate( 20 ); // Second Number Not Found
//calculate( 60, 40 );// 100
//calculate( 20, 20 ); // 40
calculate( 20, 30 ); // 50
calculate( 20, 30, 'add' ); // 50
calculate( 20, 30, 'subtract' ); // -10
calculate( 20, 30, 'multiply' ); // 600
// ------------------------------------------------------------------------------
function ageInTime ( theAge )
{
    theAge > 10 && theAge < 100
        ? console.log( `
"${ theAge } years
${ theAge * 12 } Months 
${ theAge * 52 } Weeks 
${ theAge * 12 * 30 } days 
${ theAge * 12 * 30 * 24 } Hours 
${ theAge * 12 * 30 * 24 * 60 } Minutes 
${ theAge * 12 * 30 * 24 * 60 * 60 } seconds"` )
        : console.log( `"Age Out Of Range"` );
}

// Needed Output
ageInTime( 110 ); // Age Out Of Range
ageInTime( 38 ); // Months Example => 456 Months
ageInTime( 28 ); // Months Example => 456 Months
// ------------------------------------------------------------------------------
function AgeInTime ( theAge )
{
    if ( theAge && theAge < 100 )
    {
        console.log( `
"${ theAge } years
${ theAge * 12 } Months
${ theAge * 52 } Weeks
${ theAge * 12 * 30 } days 
${ theAge * 12 * 30 * 60 } Hours 
${ theAge * 12 * 30 * 60 * 60 } Minutes
${ theAge * 12 * 30 * 60 * 60 * 60 } seconds"
        `);
    } else
    {
        console.log( `"Age Out Of Range"` );
    }
}
// Needed Output
AgeInTime( 110 ); // Age Out Of Range
AgeInTime( 38 ); // Months Example => 456 Months
AgeInTime( 28 ); // Months Example => 456 Months
// ------------------------------------------------------------------------------
function checkStatus ( a, b, c )
{
    let letter = [];
    letter.push( a, b, c );
    for ( let i = 0; i <= letter.length; i++ )
    {
        if ( typeof letter[ i ] === "string" )
        {
            a = letter[ i ];
        } else if ( typeof letter[ i ] === "number" )
        {
            b = letter[ i ];
        } else if ( typeof letter[ i ] === "boolean" )
        {
            c = letter[ i ];
            if ( c === true )
            {
                c = "Available";
            } else
            {
                c = "Not Available";
            }
        }
    }
    console.log( `"Hello ${ a } , Your Age Is ${ b } , You Are ${ c } For Hire"` );
    //    let inf = [];
    //    inf.push( a, b, c );
    //    for ( let i = 0; i < inf.length; i++ )
    //    {
    //        typeof inf[ i ] === "string"
    //            ? a = inf[ i ]
    //            : typeof inf[ i ] === "number"
    //                ? b = inf[ i ]
    //                : c = inf[ i ];
    //
    //    }
    //    c === true
    //        ? ( c = "Available" )
    //        : ( c = "Not Available" );
    //    console.log( `"Hello ${ a } , Your Age Is ${ b } , You Are ${ c } For Hire"` );
}

// Needed Output
checkStatus( "Osama", 38, true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus( 38, "Osama", true ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus( true, 38, "Osama" ); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus( false, "Osama", 38 ); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus( true, "Amr", 23 ); // "Hello Amr, Your Age Is 23, You Are Not Available For Hire"
checkStatus( "Amr", false, 23 ); // "Hello Amr, Your Age Is 23, You Are Not Available For Hire"
// ------------------------------------------------------------------------------
function createSelectBox ( startYear, endYear )
{
    document.write( `<selector>` );
    let i = startYear;
    for ( ; i <= endYear; i++ )
    {
        document.write( `<option value="${ i }">${ i }</option>` );

    }
    document.write( `</selector>` );
}

createSelectBox( 2000, 2021 );
// ------------------------------------------------------------------------------
function multiply ( ...number )
{
    let result = 1;
    for ( let i = 0; i < number.length; i++ )
    {
        if ( typeof number[ i ] === "string" )
        {
            continue;
        }
        result *= Math.floor( number[ i ] );
    }
    console.log( result );
}
multiply( 10, 20 ); // 200
multiply( "A", 10, 30 ); // 300
multiply( 100.5, 10, "B" ); // 1000