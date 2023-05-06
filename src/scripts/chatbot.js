const outputs = {
    greetings(type) {
        let responses;
        switch (type) {
            case 'morning':
                responses = ["Good morning"];
                break;
            case 'afternoon':
                responses = ["Good afternoon"];
                break;
            case 'evening':
                responses = ["Good evening"];
                break;
            default: 
                responses = ["Hello", "Hi", "Hey", "Howdy"];
                break;
        }
        return responses[Math.floor(Math.random()*responses.length)];
    },
    farewells() {
        const responses = ["Good bye", "Cya", "See ya", "Have a good day!"];
        return responses[Math.floor(Math.random()*responses.length)];
    },
    time() {
        const time = new Date().toTimeString();
        return `It's ${time}`;
    },
    date() {
        const date = new Date().toDateString();
        return `It's ${date}`;
    },
    math(input) {

    }
}

export default function chatbotCompute(input) {
    input = input.toLowerCase();
    input = input.replaceAll('!', '');
    input = input.replaceAll('.', '');
    input = input.replaceAll('?', '');
    input = input.replaceAll(' a ', ' ');
    input = input.replaceAll('please ', '');
    input = input.replaceAll(' please', '');

    switch(input) {
        case 'hello':
        case 'hi':
        case 'hey':
        case 'howdy':
        case 'good day':
            return outputs.greetings('basic');
        case 'good morning':
        case 'morning':
            return outputs.greetings('morning');
        case 'good afternoon':
            return outputs.greetings('afternoon');
        case 'good evening':
        case 'evening':
            return outputs.greetings('evening');
        case 'time':
            return outputs.time();
        case 'date':
            return outputs.date();
        default:
            console.log('default');
            break;
    }
}
