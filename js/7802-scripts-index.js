const contactFormObj = {
    name: '',
    email: '',
    purpose: ''
};
var myTerminal = new Terminal(10);
terminal.appendChild(myTerminal.html);
myTerminal.setTextSize('20px');
myTerminal.setTextColor('#00FF00');
myTerminal.blinkingCursor(true);
myTerminal.setHeight(window.innerHeight);
const date = new Date();
myTerminal.print("Welcome to the terminal of Jospak!");
myTerminal.print("This terminal will give all info about me.");
myTerminal.print('Your session started at ' + date.toDateString() + ' ' + date.toLocaleTimeString());
myTerminal.print("Hope You like it :)");
myTerminal.print('Enter `help` to list the available commands');
myTerminal.print('--------------------------------------------------------')
myTerminal.input('', command => {
        handleInput(command)
});

const handleInput  = command => {
    if (command.length) {
        command = command.toLowerCase();
        if (command === 'man') {
        } else if (command === 'help' || command === 'ls') {
            handleHelp();
        } else if (command === 'about'){
            showAbout();
        } else if (command === 'git checkout github'){
            window.open('https://github.com/Jospak');
        } else if (command === 'skills'){
            showSkills();
        } else if (command === 'contact'){
            showContact();
        } else if (command === 'test'){
            window.open('');	
        } else if (command === 'secret'){
            myTerminal.print("There is nothing here! Don't waste your time :)");			
        } else if (command === 'exit') {
            myTerminal.print('> Thank You for visiting my website thanks:)')
        } else if (command === 'clear' || command === 'cls') {
            myTerminal.clear();
        } else {
            handleError(command);
        }
    } else {
        myTerminal.beep();
    }
    if (command !== 'exit' && command !== 'contact' && command !== 'docs') {
        myTerminal.input('', command2 => {
            handleInput(command2);
        });
    }
}
const showAbout = () => {
	myTerminal.print('About me:');
    myTerminal.print('I am Jospak');
    myTerminal.print("According to me, The only source of knowledge is experience ");
    myTerminal.print("I am a Programmer, working with visual studio, visual studio code, C++, C#, TypeScript, Python, nodeJS, etc.");
    myTerminal.print("I also know virology and C# reverse engineering, would like to learn more in the field of reverse engineering.");
    myTerminal.print("I like meeting people and interacting with them to expand my knowledge.");
    myTerminal.print("I specialize in Malware, learning how to bypass modern Malware, in short I am a walking anti virus");
}

const showSkills = () => {
    myTerminal.print('> Skills are the unified force of `experience`,');
    myTerminal.print('> `intellect` and `passion` in their work');
    myTerminal.print('--------------------------------------------------------');
    myTerminal.print('******************** MY SKILLS **********************');
    myTerminal.print('--------------------------------------------------------');
    const skills = [
        {name: "Virology"},
        {name: "Reverse Engineering"},
        {name: 'C++'},
        {name: 'C#'},
        {name: "Python"},
        {name: "TypeScript"},
        {name: 'NodeJs'},
        {name: "JavaScript"},
        {name: "HTML"},
        {name: "CSS"},
    ]
    skills.forEach((element) => {
        myTerminal.print(` > ${element.name}`);
    });
    myTerminal.print('========================================================');
}

const showContact = () => {
    myTerminal.print('Wanna contact me :)');
    myTerminal.print('> Jospak@proton.me');
    myTerminal.print('> https://github.com/Jospak');
    myTerminal.input('Would you like to leave your opinion about me? [y/n]', confirm => {
        handleContactForm(confirm);
    })
}

const handleContactForm = confirm => {
    if (confirm.toLowerCase() === 'y') {
        myTerminal.input('Enter your name ', name => {
            contactFormObj.name = name;
            myTerminal.input('Overall rating [0-10]', email => {
                contactFormObj.email = email;
                myTerminal.input('Your opinion about me', purpose => {
                    contactFormObj.purpose = purpose;
                    myTerminal.print('---------------------------');
                    myTerminal.print('Thanks for filling the form');
                    myTerminal.input('', command2 => {
                        handleInput(command2);
                    });
                });
            });
        });
    } else if (confirm.toLowerCase() === 'n') {
        myTerminal.print('ohk cool no worries you can fill it later :)');
        myTerminal.print('--------------------------------------------------------');
        myTerminal.input('', command2 => {
            handleInput(command2);
        });
    } else {
        myTerminal.input('Invalid selection Please select a valid option', confirm => {
            handleContactForm(confirm)
        });
    }
}

const handleHelp = () => {
    myTerminal.print('Hey, Thanks for using Terminal :)');
    myTerminal.print('The available command in my terminal are :');
    const commands = [
        {name: 'about' },
        {name: 'skills'},
        {name: 'contact'},
		{name: 'Interactive Site'},
        {name: 'git checkout github'},
        {name: 'man'},
        {name: 'clear'},
        {name: 'help'},
        {name: 'exit'},
    ]
    commands.forEach((element) => {
        myTerminal.print(` > ${element.name}`);
    });
}

const handleError = (command) => {
    myTerminal.print('`' + command + '` is not recognised as a valid command ');
    myTerminal.print('use `help` to know more about commands');
}
