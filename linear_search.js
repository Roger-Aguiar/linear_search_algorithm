/* 
Name:         Roger Silva Santos Aguiar 
Function:     This file implements the Linear Search algorithm.
Initial date: June 30, 2020
Last update:  June 30, 2020  
*/

function generateNumbers()
{
    var numbers = [];
    var quantity = document.getElementById('quantity').value;
    console.log(quantity);
    
    for(var i = 0; i < quantity; i++)
    {
        numbers.push(Math.floor(Math.random() * quantity));
    }

    displayArray(numbers);
}

function displayArray(numbers = [])
{   
    document.getElementById('numbers').innerHTML += "List of numbers: "; 

    for(var i = 0; i < numbers.length; i++)
    {
        document.getElementById('numbers').innerHTML += numbers[i] + "\t";
    }
}