let friends = [ "Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany" ];
let index = 0;
let counter = 0;
let newArray = [];
// Output
"1 => Sayed";
"2 => Mahmoud";
for ( i = 0; i < friends.length; i++ )
{
    if ( typeof friends[ i ] === "number" || friends[ i ].startsWith("A") )
    {
        continue;
    }
    newArray.push( friends[ i ] );
}
//for ( let i = 0; i < newArray.length; i++ )
//{
//    console.log( `${ i + 1 } => ${ newArray[ i ] }` );
//}
console.log(Array.from(newArray));