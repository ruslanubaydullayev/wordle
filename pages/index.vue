<template>
  <div class="text-center">
    <div class="content">
      <input ref="nameInput" @keyup.enter="submit()" class="input" type="text" maxlength='5' v-model="guess" />
      <button class="close-btn" @click="clearInput()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="15px" version="1.1"
          viewBox="0 0 512 512" width="15px" xml:space="preserve">
          <g>
            <path
              d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
          </g>
        </svg>
      </button>
    </div>


    <div id="answer" class="flex items-center justify-center mx-auto  max-w-[220px]">
      <div id="answers" class="flex flex-wrap items-center"></div>
    </div>



  </div>
</template>

<script>
  import IconBase from '~/components/IconBase.vue'
  export default {
    components: {
      IconBase
    },
    data() {
      return {
        guess: ''
      }
    },
    methods: {

      submit() {
        const solution = 'kurak' // solution bu kun so'zi

        for (let i = 0; i < this.guess.length; i++) {
          let guessLetter = this.guess.charAt(i);
          let solutionLetter = solution.charAt(i);
          if (guessLetter === solutionLetter) {
            document.getElementById('answers').innerHTML += '<span class="is_green">' + this.guess.charAt(i) +
              '</span>';
            // console.log(this.guess.charAt(i) + ' is green');
          } else if (solution.indexOf(guessLetter) != -1) {
            // console.log(this.guess.charAt(i) + ' is yellow');
            document.getElementById('answers').innerHTML += '<span class="is_yellow">' + this.guess.charAt(i) +
              '</span>';
          } else {
            // console.log(this.guess.charAt(i) + ' is grey');
            document.getElementById('answers').innerHTML += '<span class="is_gray">' + this.guess.charAt(i) +
              '</span>';

          }
        }
      },

      clearInput() {
        this.guess = '';
        this.$refs.nameInput.focus(); 
      }
    },
    created() {
      function enterPress(e) {
        if (e.keyCode == 13) {
          if(this.guess.length != 5){
            alert('So\'z 5 harfli bo\'lishi kerak!');
          } 
          else {
            this.submit();
          }
        }
      }
    },
  }

// qo'shish kerak: 
  //  1) about game 
  //  2) Animation
  //  3) bo'sh kataklar
  //  4) so'zlar kerak
  //  5) validation qoyish
  //  6) 6 ta imkoniyat berish


</script>



<style lang="scss" scoped>

</style>


