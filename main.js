/*var myHeaders = new Headers();

const exercises = [
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
        "id": "0001",
        "name": "3/4 sit-up",
        "target": "abs"
    },
    {
        "bodyPart": "waist",
        "equipment": "body weight",
        "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
        "id": "0002",
        "name": "45° side bend",
        "target": "abs"
    }
]
const obterExercicios = () => {
    myHeaders.set('authorization', 'Token_MWQ1MDc2ZTUtNmY3Yi00YWNmLTg3MGYtY2M5NjI0ODllOWNi');
    console.log()
    fetch('https://v1.exercisedb.io/api/exercises',
        {
            headers: myHeaders,
            method: 'GET'
        }
    ).then(result => {
        console.log(result)
    }).catch(error => console.log(error))
}

// obterExercicios()

const mostrarItemsNaTela = () => {
    const domExercise = document.querySelector('.exercise');
    console.log(domExercise)
    domExercise.innerHTML(`qwewqe   `)
    exercises.map(exercise => {
        // var p = document.createElement(`p`).innerHTML(exercise.name);
        // var textnode = p.createTextNode(exercise.name);   
        // domExercise.appendChild(textnode)
        console.log(exercise)
    })
}
mostrarItemsNaTela()*/