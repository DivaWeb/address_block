const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message:"Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Date",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main(){
        console.log('Welcome to AddressBlock');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                    break;
                case "Date":
                    this.getDate(); 
                    this.exit();   
                default:
                    console.log("Invalid input");
                    this.main();        
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    clear(){
        console.log('\x1Bc');
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }

    exit(){
        console.log("Thanks for using AddressBlock");
        process.exit();
    }

    getDate(){
        const date = new Date();
        const new_date = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
        console.log(new_date);
    }

    getContactCount(){
        return this.contacts.length;
    }

}