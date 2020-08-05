<template>
  <form @submit.prevent="onsubmit" action="/dash" method="post">
    <p>О вас</p>
    <input 
      id="lastName" 
      placeholder="Фамилия*" 
      v-model="lastName"
      name="lastName"
      type="text"
      required
    >
    <br>
    <input 
      id="firstName"
      name="firstName"
      placeholder="Имя*" 
      v-model="firstName"
      type="text"
      required
    >
    <br>

    <input type="text" id="patronym" name="patronym" v-model="patronym" placeholder="Отчество">
    <br>
    <label for="birthdate">Дата рождения*: </label>
    <input 
      id="birthdate" 
      type="date" 
      name="birthdate" 
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      min="1901-01-01" 
      max="2099-12-31"
      v-model="birthdate" 
      required
    >
    <p>Пол:</p>
    <input name="sex" v-model="male" type="radio" id="male"><label for="male">Мужчина</label> 
    <br> <br>
    <input name="sex" type="radio" id="female"><label for="female">Женщина</label> 
    <br> <br>
    <label for="phoneNumber">Номер телефона*: </label>
    <input 
      type="tel" 
      name="phoneNumber" 
      id="phoneNumber" 
      pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
      placeholder="+7(___)___-__-__"
      v-model="phoneNumber"
      required
    >
    <p>Группа клиентов*</p>
    <select 
      multiple 
      name="clientGroup" 
      v-model="clientGroup" 
      id="clientGroup" 
      required
    >
      <option>VIP</option>
      <option>Проблемные</option>
      <option>ОМС</option>
    </select>
    <br>
    <label for="doctor">Врач: </label>
    <select size="1" id="doctor" v-model="doctor" name="doctor">
      <option>Иванов</option>
      <option>Захаров</option>
      <option>Чернышева</option>
    </select>
    <br>
    <input type="checkbox" name="sms" v-model="sms" id="sms">
    <label for="sms"> Не отправлять СМС</label>

    <p>Адрес</p>
    <input type="text" placeholder="Индекс" v-model="index" id="index" name="index">
    <input type="text" placeholder="Страна" v-model="country" id="country" name="country">
    <input type="text" placeholder="Область" v-model="region" id="region" name="region">
    <input type="text" placeholder="Город*" v-model="city" id="city" name="city" required>
    <input type="text" placeholder="Улица" v-model="street" id="street" name="street">
    <input type="text" placeholder="Дом" v-model="house" id="house" name="house">

    <p>Тип документа*</p>
    <select name="documentType" v-model="documentType" id="documentType" required>  
      <option>Паспорт</option>
      <option>Свидетельство о рождении</option>
      <option>Вод. удостоверение</option>
    </select>

     <div>
      <input type="text" placeholder="Серия и номер" name="passportData" id="passportData" v-model="passportData">
    </div>

    <input type="text" placeholder="Кем выдан">

    <label for="passportDate">Дата выдачи* </label>
    <input 
      type="date" 
      name="passportDate" 
      required 
      min="1901-01-01" 
      max="2099-12-31" 
      v-model="passportDate" 
      @blur="$v.passportDate.$touch()"
    >

    <p>*Поле обязательное для заполнения.</p> 

    <button type="submit">Отправить</button>
  </form> 
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  
  name: "form",

  data: () => ({
    firstName: "",
    lastName: "",
    patronym: "",
    birthdate: "",
    phoneNumber: "",
    clientGroup: [],
    doctor: "",
    sms: "",
    index: "",
    country: "",
    region: "",
    city: "",
    street: "",
    house: "",
    documentType: "",
    passportData: "",
    passportDate: "",
    dateOfGiving: "",
    male: "",
    errors: [],
  }),

  validations: {
    firstName: {required},
    lastName: {required},
    patronym: {},
    birthdate: {required},
    phoneNumber: {required},
    clientGroup: {required},
    doctor: {},
    sms: {},
    index: {},
    country: {},
    region: {},
    city: {required},
    street: {},
    house: {},
    documentType: {required},
    passportData: {},
    passportDate: {},
    dateOfGiving: {},
    male: {}
    
  },
 
  methods: {
    onsubmit() {
      this.$router.push("/dash")

      if (this.$v.$invalid) {
        this.$v.$touch
        return
      }

      this.errors = [];

      if (!this.firstName) {
        this.errors.push('Требуется указать имя.');
      }

      if (!this.lastName) {
        this.errors.push('Требуется указать возраст.');
      }

      let formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        patronym: this.patronym,
        birthdate: this.birthdate,
        phoneNumber: this.phoneNumber,
        doctor: this.doctor ,
        sms: this.sms,
        index: this.index,
        country: this.country,
        region: this.region,
        city: this.city,
        street: this.street,
        house: this.house,
        documentType: this.documentType,
        passportData: this.passportData,
        passportDate: this.passportDate,
        dateOfGiving: this.dateOfGiving,
        male: this.male
      }
      console.log(formData)
    },
  }
}
</script>

<style lang="scss" scoped>

form {
  max-width: 500px;
	padding: 10px 20px;
	background: #f4f7f8;
	margin: 10px auto;
	padding: 20px;
	background: #f4f7f8;
	border-radius: 8px;
	font-family: Georgia, "Times New Roman", Times, serif;
}

input[type="text"] {
  width: 100%;
}

input[type="text"],
input[type="date"],
input[type="tel"],
select {
	font-family: Georgia, "Times New Roman", Times, serif;
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	box-sizing: border-box; 
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box; 
	background-color: #e8eeef;
	color:#8a97a0;
	-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-bottom: 30px;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="tel"]:focus,
select:focus {
	background: #d2d9dd;
}

select {
	-webkit-appearance: menulist-button;
	height:35px;
}

button {
	position: relative;
	display: block;
	padding: 19px 39px 18px 39px;
	color: #FFF;
	margin: 0 auto;
	background: #1abc9c;
	font-size: 18px;
	text-align: center;
	font-style: normal;
	width: 100%;
	border: 1px solid #16a085;
	border-width: 1px 1px 3px;
	margin-bottom: 10px;
}

#clientGroup {
  height: 80px;
}

button:hover {
	background: #109177;
  cursor: pointer;
}

</style>