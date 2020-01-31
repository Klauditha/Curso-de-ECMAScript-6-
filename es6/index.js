/*Parmetros por defecto */
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'CH';
    console.log(name,age,country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country = 'CH')
{
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo', 32 , 'PE');

///Template literal
let hello = "hello";
let world = "wORLD";
let epiphase = hello + ' ' + world;
console.log(epiphase);
//comillas francesas
let epiphase2 = `${hello} ${world}` ;
console.log(epiphase2);