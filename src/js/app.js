const app = new Vue({
    el: '#app',
    data: {
        persons: [
            {
                name: 'juan Sebastian',
                age: 20,
                id: 1111111111
            }, {
                name: 'Felipe Almanza',
                age: 20,
                id: 2222222222
            }, {
                name: 'Sebstian Gutierrez',
                age: 20,
                id: 3333333333
            }
        ],

        editPerson: false,
        idPerson: null,
        buttonText: 'Agregar'

    },
    computed: {

    },
    methods: {
        edit: function (person) {
            this.editPerson = true;
            this.person = person;
            document.getElementById('name').value = person.name;
            document.getElementById('age').value = person.age;
            document.getElementById('id').value = person.id;
            this.buttonText = 'Actualizar'

        },
        deletePerson: function (id) {
            var newPersons = this.persons.filter((person) => person.id != id);

            this.persons = newPersons;
        },

        updatePerson: function () {
            var userExist = false;
           
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var id = document.getElementById('id').value;
            const newPerson = {
                name: name,
                age: age,
                id: id
            }

            if (this.editPerson == true) {
                var personsTempo = this.persons.filter((person) => person.id != this.person.id);

                for (var a = 0; a < personsTempo.length; a++) {
                    if (personsTempo[a].id == id) {
                        userExist = true;
                    }
                }

                if (userExist != true) {

                    for (var a = 0; a < this.persons.length; a++) {
                        if (this.persons[a].id == this.person.id) {
                            this.persons[a] = newPerson;
                        }
                    }

                    for (var a = 0; a < this.persons.length; a++) {
                        if (this.persons[a].id == this.person.id) {
                            this.persons[a] = newPerson;
                        }
                    }
                    var newPersons = this.persons.filter((person) => {
                        if (person.id == this.person.id) {
                            return newPerson;
                        }
                        return person;
                    });

                    this.persons = newPersons;
                    this.editPerson = false;
                }else {
                    alert('no pueden existir dos personas con la misma cedula')
                }


            } else {
                console.log('name' + name + ' age'+ age+ ' id: '+id)
                if (name != '' && age != ''  && age != undefined  && id != '') {
                    for (var a = 0; a < this.persons.length; a++) {
                        if (this.persons[a].id == id) {
                            userExist = true;
                        }
                    }
                    if (userExist == true) {
                        alert('la persona ya existe')
                    } else {

                        this.persons.push(newPerson)
                    }
                } else {
                    alert('Ingrese los datos')
                }
            }
            this.resetInputs();

        },

        resetInputs: function () {
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('id').value = '';
            this.buttonText = 'Agregar'
        }

    },
    watch: {

    }
});