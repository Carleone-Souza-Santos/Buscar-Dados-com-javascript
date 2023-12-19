const Database = [
    { Nome: 'Carlos', profession: 'Programador', Salary: 5.0, Datybirth: '07/04/2000' },
    { Nome: 'Denis', profession: 'Admistração', Salary: 1.6, Datybirth: '17/08/1982' },
    { Nome: 'Pedro', profession: 'Estoquista', Salary: 2.5, Datybirth: '15/12/1998 ' },
    { Nome: 'Joao', profession: 'Motorista', Salary: 3.0, Datybirth: '02/02/1988' },
    { Nome: 'jonas', profession: 'Comprador', Salary: 4.0, Datybirth: '19/06/1990' },
    { Nome: 'Aline', profession: 'Dentista', Salary: 5.0, Datybirth: '10/09/1999' },
    { Nome: 'Carla', profession: 'Medica', Salary: 7.0, Datybirth: '07/03/1889' },
    { Nome: 'Vanessa', profession: 'Gerente Comercial', Salary: 6.0, Datybirth: '01/05/2000' },
    { Nome: 'Jackson', profession: 'Fretista', Salary: 1.5, Datybirth: '13/04/2001' },
    { Nome: 'Franciele', profession: 'Engenheira', Salary: 12.0, Datybirth: '22/11/1996' },
]

let Form = document.querySelector('form')
Form.addEventListener("submit", (e) => {
    e.preventDefault()
    Outputdata();

})

function Outputdata() {
    let ContributorName = document.querySelector("#Contact").value;
    let Nameemployee = document.querySelector('#colab')
    let Job_employee = document.querySelector('#job')
    let Salaryemploy = document.querySelector('#val')
    let Datybirth = document.querySelector('#Datebirth')


    for (let i = 0; i < Database.length; i++) {
        const Namejob = Database[i].Nome;

        if (ContributorName.toUpperCase() === Namejob.toUpperCase()) {

            Nameemployee.innerHTML = `${Namejob}`
            Job_employee.innerHTML = `${Database[i].profession}`
            Salaryemploy.innerHTML = `${Database[i].Salary.toFixed(3) + ' mil'}`
            Datybirth.innerHTML = `${Database[i].Datybirth} `
            break;

        }else {

            Nameemployee.innerHTML = `Collaborator without Registration!`;
            Job_employee.innerHTML = `Collaborator without Registration!`;
            Salaryemploy.innerHTML = `Collaborator without Registration!`;
            Datybirth.innerHTML = `Collaborator without Registration!`;

        }

    }
}