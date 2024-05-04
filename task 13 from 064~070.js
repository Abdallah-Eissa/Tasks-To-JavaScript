//for task 1 
function getDetails ( zName, zAge, zCountry )
{
    function namePattern ( zName )
    {
        // Write Your Code Here
        let firstName = zName.split( " " )[ 0 ];
        let lastName = zName.split( " " )[ 1 ][ 0 ].toUpperCase();
        return `Hello ${ firstName } ${ lastName }`;
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
    }
    function ageWithMessage ( zAge )
    {
        // Write Your Code Here
        let Age = zAge.split( " " )[ 0 ];
        return `Your Age Is ${ Age }`;
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters ( zCountry )
    {
        // Write Your Code Here
        let country = zCountry.substr( 0, 2 ).toUpperCase();
        return `You live In ${ country }`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails ()
    {
        // Write Your Code Here
        return `${ namePattern( zName ) }., ${ ageWithMessage( zAge ) }, ${ countryTwoLetters( zCountry ) }`;
    }
    return fullDetails(); // Do Not Edit This
}

console.log( getDetails( "Osama Mohamed", "38 Is My Age", "Egypt" ) );
// Hello Osama M., Your Age Is 38, You Live In EG

console.log( getDetails( "Ahmed ali", "32 Is The Age", "Syria" ) );
// Hello Ahmed A., Your Age Is 32, You Live In SY
// ------------------------------------------------------------------------------
//function itsMe ()
//{
//    return `Iam A Normal Function`;
//}
//
//console.log( itsMe() ); // Iam A Normal Function

let itsMe = () => `Iam A Normal Function`;

console.log( itsMe() ); // Iam A Normal Function




let urlCreate = ( protocol, web, tld ) =>`${ protocol }://www.${ web }.${ tld }`;

console.log( urlCreate( "https", "elzero", "org" ) ); // https://www.elzero.org
// ------------------------------------------------------------------------------
let checker = ( zName ) =>
{
    return ( status ) => ( salary ) =>

    { return status === "Available" ? `${ zName }, My Salary Is ${ salary }` : `Iam Not Available`; };
};

console.log( checker( "Osama" )( "Available" )( 4000 ) ); // Osama, My Salary Is 4000
console.log( checker( "Ahmed" )( "Not Available" )() ); // Iam Not Available
// ------------------------------------------------------------------------------
function specialMix ( ...data )
{
    // Your Code Here
    let result = 0;
    for ( let i = 0; i < data.length; i++ )
    {
        if ( typeof data[ i ] === "number" )
        {
            result += data[ i ];
        } else if ( !isNaN( parseInt( data[ i ].slice( 0, 2 ) ) ) )
        {
            result += +data[ i ].slice( 0, 2 );
        }
    }
    if ( result === 0 )
    {
        return `All Is String`;
    }
    return `${ result }`;
}

console.log( specialMix( 10, 20, 30 ) ); // 60
console.log( specialMix( "10Test", "Testing", "20Cool" ) ); // 30
console.log( specialMix( "Testing", "10Testing", "40Cool" ) ); // 50
console.log( specialMix( "Test", "Cool", "Test" ) ); // All Is Strings