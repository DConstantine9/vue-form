<template>
  <form @submit.prevent="onsubmit" action="/dash" method="post">
    <p>О вас</p>
    <input 
      id="lastName" 
      placeholder="Фамилия*" 
      v-model="lastName"
      name="lastName"
      required
    >
    <input 
      id="firstName"
      name="firstName"
      placeholder="Имя*" 
      v-model="firstName"
      required
    >
    <div v-if="errors.length">
      <div v-for="(error, index) in errors" v-bind:key="index">{{ error }}</div>
    </div>
    <input id="patronym" name="patronym" v-model="patronym" placeholder="Отчество">
    <label for="birthdate">Дата рождения:</label>
    <input id="birthdate" type="date" name="birthdate" v-model="birthdate" required>
    <p>Пол:</p>
    <input name="sex" type="radio" id="male"><label for="male">Мужчина</label> 
    <input name="sex" type="radio" id="female"><label for="female">Женщина</label> 
    <label for="phoneNumber">Телефон</label>
    <input 
      type="tel" 
      name="phoneNumber" 
      id="phoneNumber" 
      
      v-model="phoneNumber"
      required
    >
    <p>Группа клиентов</p>
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
    <label for="doctor">Врач</label>
    <select size="1" id="doctor" v-model="doctor" name="doctor">
      <option>Иванов</option>
      <option>Захаров</option>
      <option>Чернышева</option>
    </select>
    <input type="checkbox" name="sms" v-model="sms" id="sms"><label for="sms">Не отправлять СМС</label>

    <p>Адрес</p>
    <input placeholder="Индекс" v-model="index" id="index" name="index">
    <input placeholder="Страна" v-model="country" id="country" name="country">
    <input placeholder="Область" v-model="region" id="region" name="region">
    <input placeholder="Город*" v-model="city" id="city" name="city" required>
    <input placeholder="Улица" v-model="street" id="street" name="street">
    <input placeholder="Дом" v-model="house" id="house" name="house">

    <p>Тип документа*</p>
    <select name="documentType" v-model="documentType" id="documentType" required>  
      <option>Паспорт</option>
      <option>Свидетельство о рождении</option>
      <option>Вод. удостоверение</option>
    </select>

     <div>
      <input placeholder="Серия и номер" name="passportData" id="passportData" v-model="passportData">
      <span v-if="$v.passportData.$invalid">
        Серия и номер паспорта должны быть в формате 1234 567890
      </span>
    </div>

    <input placeholder="Кем выдан">

    <div>
    <input placeholder="Дата выдачи" v-model="passportDate" @blur="$v.passportDate.$touch()">
    <span v-if="$v.passportDate.$error">
      Дата должна быть в формате ДД.ММ.ГГГГ
    </span>
    </div> <!---->
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
      }
      console.log(formData)

    }
  }
}
</script>

<style scoped>


</style>