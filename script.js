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
    let workouts = [];  // Array para armazenar os treinos realizados
    let sessions = 0;

    while (sessions < 3) {
        workouts.push('Treino número ' + (sessions + 1) + ' realizado!'); // Adiciona cada treino ao array
        sessions++;
    }

    return workouts;  // Retorna o array com os treinos realizados
}

// Função para perguntar ao usuário se ele quer continuar treinando
function askForMoreTraining() {
    let continueTraining;
    do {
        continueTraining = prompt('Deseja realizar mais um treino? (sim/não)');
    } while (continueTraining.toLowerCase() === 'sim');
    return continueTraining;
}

// Função para mostrar o resumo do treino
function showWorkoutSummary(workouts) {
    alert('Resumo do seu treino:');
    workouts.forEach((workout, index) => {
        alert(workout);  // Exibe cada treino do array
    });
}

// Função principal para organizar o fluxo de execução
function main() {
    alert('Bem-vindo à UchoaFit!');
    
    // Objeto para armazenar as informações do usuário
    const user = {
        name: prompt('Qual é o seu nome?'),
        period: prompt('Qual período você deseja (manhã/tarde/noite)?'),
        weight: parseFloat(prompt('Qual é o seu peso?')),
        height: parseFloat(prompt('Qual é a sua altura?'))
    };

    // Chama as funções
    greetUserBasedOnPeriod(user);
    checkWeight(user.weight);
    
    // Realiza os treinos e armazena no array
    let workouts = performWorkouts();
    
    // Pergunta se o usuário quer continuar treinando
    askForMoreTraining();

    // Mostra o resumo dos treinos realizados
    showWorkoutSummary(workouts);
    
    alert('Obrigado por participar, ' + user.name + '!');
}

// Chama a função principal para executar o código
main();
