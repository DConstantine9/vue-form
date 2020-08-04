<template>
  <form @submit.prevent="onsubmit" action="POST">
    <p>О вас</p>
    <input id="lastName" placeholder="Фамилия*" required>
    <input id="firstName" placeholder="Имя*" required>
    <input id="patronym" placeholder="Отчество">
    <label for="birthdate">Дата рождения:</label>
    <input id="birthdate" type="date" name="birthdate" required>
    <p>Пол:</p>
    <input name="sex" type="radio" id="male"><label for="male">Мужчина</label> 
    <input name="sex" type="radio" id="female"><label for="female">Женщина</label> 
    <label for="phoneNumber">Телефон</label>
    <input 
      type="tel" 
      name="phoneNumber" 
      id="phoneNumber" 
      pattern="/+7[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/" 
      required
    >
    <p>Группа клиентов</p>
    <select multiple size="1" name="" id="clientGroup" required>
      <option>VIP</option>
      <option>Проблемные</option>
      <option>ОМС</option>
    </select>
    <select size="1">
      <option>Иванов</option>
      <option>Захаров</option>
      <option>Чернышева</option>
    </select>
    <input type="checkbox" name="sms" id="sms"><label for="sms">Не отправлять СМС</label>

    <p>Адрес</p>
    <input placeholder="Индекс">
    <input placeholder="Страна">
    <input placeholder="Область">
    <input placeholder="Город*" id="city" required>
    <input placeholder="Улица">
    <input placeholder="Дом">

    <p>Тип документа*</p>
    <select name="" id="documentType" value="" required>  
      <option>Паспорт</option>
      <option>Свидетельство о рождении</option>
      <option>Вод. удостоверение</option>
    </select>
    <input placeholder="Серия">
    <input placeholder="Номер">
    <input placeholder="Кем выдан">
    <input placeholder="Дата выдачи*" id="dateOfGiving" required>

    <p>*Поле обязательное для заполнения.</p> 

    <button type="submit">Отправить</button>
  </form> 
</template>

<script>
export default {
  name: "form",
  data: () => ({
    dateOfGiving,
    documentType,
    city,
    clientGroup,
    birthdate,
    phoneNumber,
    firstName,
    lastName
  }),
  validations: {

  },
  methods: {
    onsubmit() {

    }
  }
}
</script>

<style>

</style>