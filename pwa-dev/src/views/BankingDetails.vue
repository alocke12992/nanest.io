<template>
  <div class="banking-details">
    <div class="credit-card">
      <div class="numbers">
        <span class="card-num">1234</span>
        <span class="card-num">5678</span>
        <span class="card-num">9123</span>
        <span class="card-num">1234</span>
      </div>
      <div class="card-name-month">
        <div>Juan Chavez</div>
        <div>04/22</div>
      </div>
    </div>
    <div>
      <form>
        <div class="input-wrapper">
          <label for="card-holder">Card holder's name:</label>
          <input type="text" placeholder="Juan Chavez">
        </div>
        <div class="input-wrapper">
          <label for="card-holder">Card number:</label>
          <input type="text" placeholder="1234 5678 9123 4567">
        </div>
        <div class="date-code-wrapper">
          <div class="input-wrapper">
            <label for="card-holder">Expire Date:</label>
            <input type="text" placeholder="04 / 19">
          </div>
          <div class="input-wrapper">
            <label for="card-holder">Security Code:</label>
            <input type="text" placeholder="123">
          </div>
        </div>
      </form>
      <div>
        <button class="action-button">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BankingDetails extends Vue {
  message: string = ''

  mounted () {
    console.log('Mounted')
  }
}
</script>

<style scoped>
.banking-details {
  padding: 1rem;
}

.credit-card {
  color: white;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  font-weight: 500;
  background: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  min-height: 10rem;
  border-radius: 0.3rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.numbers {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 700;
  padding: 0 2.5rem;
}

.card-name-month {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.5rem;
  align-items: center;
}

.date-code-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.date-code-wrapper .input-wrapper {
  width: 48%;
}

form {
  padding: 0 1rem;
}

button.action-button {
  margin-top: 2rem;
  background-color: #2BD29E;
  min-height: 3rem;
  min-width: 15rem;
  border-radius: 5rem;
  outline: 0;
  border: 0;
  font-size: 1rem;
  color: white;
  font-weight: 700;
}

</style>
