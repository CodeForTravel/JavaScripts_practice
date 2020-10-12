const companies = [
    { name: 'Company 1', category :'Category 1', start: 1996 , end:2001 },
    { name: 'Company 2', category :'Category 2', start: 1996 , end:2001 },
    { name: 'Company 3', category :'Retail', start: 1996 , end:2001 },
    { name: 'Company 4', category :'Category 4', start: 1936 , end:2005 },
    { name: 'Company 5', category :'Retail', start: 1956 , end:2006 },
    { name: 'Company 6', category :'Category 6', start: 1966 , end:2003 },
    { name: 'Company 7', category :'Retail', start: 1976 , end:2007 },
    { name: 'Company 8', category :'Category 8', start: 1956 , end:2000 }
]

const ages = [ 33, 45, 43, 12, 78, 45, 76, 43, 17, 34, 76, 12, 78, 48, 37];


// forEach loop
//--------------------------
// companies.forEach(function(Company){
//     console.log(Company.name);
// })


//filter
//--------------------------
// let canDrink = [];
// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 21 ){
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true
//     }
// })
// short hand function
// const canDrink = ages.filter(age => age >= 21 );
// console.log(canDrink);

//filter retail companies
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });
// short hand function
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);


//map 
// --------------------------------
