let app = new Vue({
    el: '#root',
    data: {
        arrContacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                id: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        show: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                id: 1,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        show: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        show: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                id: 2,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        show: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                        show: false
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                id: 3,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        show: false
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                id: 4,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received',
                        show: false
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                id: 5,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent',
                        show: false
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                id: 6,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received',
                        show: false
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                id: 7,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent',
                        show: false
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received',
                        show: false
                    }
                ],
            }
        ],
        activeIndex: 0,
        search: '',

        newMessage:
        {
            date: new Date().toISOString().replaceAll('-', '/').replaceAll('T', ' ').split('.')[0],
            message: '',
            status: 'sent',
            show: false
        },
        newAnswer:
        {
            date: new Date().toISOString().replaceAll('-', '/').replaceAll('T', ' ').split('.')[0],
            message: 'Ok',
            status: 'received',
            show: false
        }
    },

    methods: {

        sendMessage(index) {
            if (this.newMessage.message.trim()) {
                this.newMessage.message = this.newMessage.message.trim();
                this.arrContacts[index].messages.push({ ...this.newMessage });
                this.newMessage.message = '';
                setTimeout(() => this.arrContacts[index].messages.push(this.newAnswer), 1000);
            }
        },

        filterName() {
            for (let i = 0; i < this.arrContacts.length; i++) {
                if (this.arrContacts[i].name.toLowerCase().includes(this.search.toLowerCase())) {
                    this.arrContacts[i].visible = true;
                } else {
                    this.arrContacts[i].visible = false;
                }
            }
        },

        deleteMessage(index) {
            this.arrContacts[this.activeIndex].messages.splice(index, 1);
            console.log(this.arrContacts[this.activeIndex].messages)
        },

        checkShow(index){
            this.arrContacts[this.activeIndex].messages[index].show = !this.arrContacts[this.activeIndex].messages[index].show
        }
    },
})


// alternativa per filtrare le chat (in questo caso nell'html iterare i v-for sul nuovo array crato con filteredName e non su arrContacts) il problema di questa soluzione è che filtra in automatico direttamente anche la chat visualizzata a destra

/*
computed: {
    filteredName(){
        console.log(this.search);
        return this.arrContacts.filter(names => names.name.toLowerCase().includes(this.search.toLowerCase()));
    }
}

Possibile funzione per creare le chiavi show, ma capire come inserirla e se corretta
    createShow (){
            for(let i = 0; this.arrContacts.length; i++){
                for(let j = 0; this.arrContacts[i].messages.length; j++){
                    this.arrContacts[i].messages[j].show = false
                }
            }
        }
    } 
*/
