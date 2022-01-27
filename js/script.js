console.log('Vuejs OK', Vue);

Vue.config.devtools = true;

/*

Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
- Deve essere possibile scorrere le immagini cliccando sulle freccette.
- I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
- Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.

Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!


Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini

*/


const root = new Vue(
   {
      el: '#root',
      data: {
         active: 'dot.active',
         currentIndex : 0,
         images: [
            {
               url: 'images/image1.jpg',
               number: 'image'
            },
            {
               url: 'images/image2.jpg',
               number: 'image'
            },
            {
               url: 'images/image3.jpg',
               number: 'image'
            },
            {
               url: 'images/image4.jpg',
               number: 'image'
            }
         ]
      },
      methods: {
         nextImage() {
            this.currentIndex++;
         },
         prevImage() {
            this.currentIndex--;
         },
         isActive() {
            if (index == currentIndex) {
               
            }
         }
      }
   }
);