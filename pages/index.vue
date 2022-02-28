<template>
  <div class="container">
    <div class="row">

      <header class="header">

        <button @click="$modal('gameConditions')">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path fill="#FFFFFF" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
        </button>

        <a class="header__brand">WORDLE</a>

        <button @click="$modal('gameSettings')">
           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="#FFFFFF" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
          </svg>
        </button>

      </header>


      <div class="content text-center">
        <input ref="nameInput" @keyup.enter="submit()" class="input" type="text" maxlength='5' v-model="guess" />
        <button v-if="this.guess.length" class="close-btn" @click="clearInput()">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="15px" version="1.1"
            viewBox="0 0 512 512" width="15px" xml:space="preserve">
            <g>
              <path
                d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
            </g>
          </svg>
        </button>

        <div id="forNotif"></div>



        <modal v-bind="{
          title: this.$t('game_conditions'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="gameConditions">
          6 ta urinishda <b> SO'Z </b> ni toping. <br>

          Har bir taxmindan so'ng, kataklarning rangi o'zgarib, sizning taxminingiz kun
          so'ziga qanchalik yaqin ekanligini ko'rsatadi. <br>


          Ushbu sayt - <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">WORDLE</a>
          o'yinining norasmiy o'zbekcha talqini. <br>


          <img class="modalka__img" src="images/green_word.png" alt="">
          <b> S </b> harfi SO'Z ichida bor va to'g'ri o'rindan joy olgan.

          <img class="modalka__img" src="images/yellow_word.png" alt="">
          <b> L </b> harfi SO'Z ichida bor lekin noto'g'ri o'rindan joy olgan.

          <img class="modalka__img" src="images/gray_word.png" alt="">
          <b> O </b> harfi SO'Z ichida ishtirok etmagan. <br>

          Sayt to'liqligicha <a href="https://t.me/R_27_12">Ubaydullayev R.</a> tomonidan ishlab chiqildi.

        </modal>


        <modal v-bind="{
          title: this.$t('game_settings'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="gameSettings">

          Settings

        </modal>


        <modal v-bind="{
          title: this.$t('victory'),
          contentC: 'rounded-[12px]',
          bodyC: '!p-[0px] rounded-[12px]',
          width: 584,
        }" id="wordFound">

          So'zni topdingiz
          To'gri javob : <b id="solutionWord"></b>

          <button @click="refreshWord(); $modalHide('wordFound')" class="word-found__btn block mt-[30px] mx-auto">
            Yana o'ynayman
          </button>

        </modal>


      </div>


      <div id="answer" class=" mt-[30px] flex items-center justify-center mx-auto  max-w-[220px]">
        <div id="answers" class="flex flex-wrap items-center"></div>
      </div>




    </div>
  </div>

</template>

<script>
  import IconBase from '~/components/IconBase.vue'
  import Modal from '../components/Modal.vue'
  export default {
    components: {
      IconBase,
      Modal
    },
    data() {
      return {
        guess: ''
      }
    },


    methods: {

      submit() {

        const words = ['hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar','hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar','hazar', 'jamol', 'ariza', 'baliq', 'qorin', 'ajdar', 'raqib', 'rohib', 'ablah', 'qotil', 'lozim', 'biroq', 'shart', 'sabab', 'iqror', 'maqol', 'ibora', 'kalom', 'solih', 'ixlos', 'madad', 'anjir', 'matoh']  

        // const solution = words[Math.floor(Math.random() * words.length)] // solution bu kun so'zi
        let solution = 'baliq' // solution bu kun so'zi
        
        


        const inp = document.getElementsByClassName('input')  


        if(this.guess == solution){
             document.querySelector(`#wordFound`).classList.add("_active");
             document.documentElement.classList.add("_lock");
             document.getElementById('solutionWord').innerHTML = solution.toUpperCase();

        }

        if(this.guess.length < 5){
           this.guess = '';
           this.$refs.nameInput.focus();
           document.getElementById('forNotif').innerHTML = '<div class="notif notif--error">'+ this.$t('less_5') +'</div>';
           document.getElementById('forNotif').style.opacity = '1';

        }

        else {

        document.getElementById('forNotif').style.opacity = '0';
        for (let i = 0; i < this.guess.length; i++) {
          let guessLetter = this.guess.charAt(i);
          let solutionLetter = solution.charAt(i);
          console.log(solution)
          if (guessLetter === solutionLetter) {
            document.getElementById('answers').innerHTML += '<span class="is_green">' + this.guess.charAt(i) +
              '</span>';

          } else if (solution.indexOf(guessLetter) != -1 && guessLetter !== solutionLetter) {
            document.getElementById('answers').innerHTML += '<span class="is_yellow">' + this.guess.charAt(i) +
              '</span>';
          } else {
            // console.log(this.guess.charAt(i) + ' is grey');
            document.getElementById('answers').innerHTML += '<span class="is_gray">' + this.guess.charAt(i) +
              '</span>';

          }
        }
      }
          this.guess = '';  
      },

      clearInput() {
        this.guess = '';
        this.$refs.nameInput.focus();
      },

      refreshWord(){
        console.log('refresh word')
        document.getElementById('answers').innerHTML = '';
        document.getElementById('forNotif').innerHTML = '';
        this.$refs.nameInput.focus();


      }
    },
    created() {
      function enterPress(e) {
        if (e.keyCode == 13) {
          if (this.guess.length != 5) {
            alert('So\'z 5 harfli bo\'lishi kerak!');
          } else {
            this.submit();
          }
        }
      }
    },
  }

  // qo'shish kerak: 
  //  1) about game  => Complete
  //  2) Animation 
  //  3) bo'sh kataklar 
  //  4) so'zlar kerak, randomly, AAAAA yozsa bunaqa so'z yo'q deb chiqishi
  //  5) validation qoyish => complete
  //  6) 6 ta imkoniyat berish 
  //  7) xato ishlayapti
  //  8) store ga saqlash

</script>



<style lang="scss" scoped>

</style>
