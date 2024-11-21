
const workouts = []
const user = {}

// Função para cumprimentar o usuário com base no período


function greetUserBasedOnPeriod(user) {
    const { name, period } = user; // Desestruturação do objeto

    if (period === 'manhã') {
        alert('Bom treino pela manhã, ' + name + '!');
    } else if (period === 'tarde') {
        alert('Bom treino à tarde, ' + name + '!');
    } else if (period === 'noite') {
        alert('Bom treino à noite, ' + name + '!');
    } else {
        alert('Período inválido, por favor escolha entre manhã, tarde ou noite.');
    }
}

// Função para verificar o peso
function checkWeight(weight) {
    switch (true) {
        case (weight < 60):
            alert('Você está abaixo do peso ideal.');
            break;
        case (weight >= 60 && weight <= 80):
            alert('Você está no peso ideal.');
            break;
        case (weight > 80):
            alert('Você está acima do peso ideal.');
            break;
        default:
            alert('Peso inválido.');
    }
}

// Função para registrar os treinos
function performWorkouts() {
    workouts.push(user.period)
}

function newUser() {
    user.name = prompt('Qual é o seu nome?')
    user.period = prompt('Qual período você deseja (manhã/tarde/noite)?')
    user.weight = parseFloat(prompt('Qual é o seu peso?'))
    user.height = parseFloat(prompt('Qual é a sua altura?'))
}

// Função para mostrar o resumo do treino
function showWorkoutSummary() {
    alert('Treinos realizados!');
}

function askForMoreTraining() {
    let continueTraining;
    do {
        continueTraining = confirm('Deseja realizar mais um treino?');

        switch (continueTraining) {
            case true:

                newUser()
                greetUserBasedOnPeriod(user);
                checkWeight(user.weight);
                break
            case false:
                alert('Obrigado por participar!')
                break
        }
        
    } while (continueTraining !== false);
    return continueTraining;
}

// Função principal para organizar o fluxo de execução
function main() {
    alert('Bem-vindo à UchoaFit!');
    
    // Objeto para armazenar as informações do usuário
    newUser()

    // Chama as funções
    greetUserBasedOnPeriod(user);
    checkWeight(user.weight);
    
    // Realiza os treinos e armazena no array
    performWorkouts();
    
    // Pergunta se o usuário quer continuar treinando
    askForMoreTraining();

    // Mostra o resumo dos treinos realizados
    showWorkoutSummary(workouts);

}

// Chama a função principal para executar o código
main();
