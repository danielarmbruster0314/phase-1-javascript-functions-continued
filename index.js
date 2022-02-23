// code your solution here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(where = "go to the office"){
    return `This Monday, I will ${where}.`
}


let wrapAdjective = function(style="*"){
    return function(adjective="speacail"){
        return `You are ${style}${adjective}${style}!`
    }
} 

