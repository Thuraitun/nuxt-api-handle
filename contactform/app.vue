<script setup>
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const contact = async () => {
    const { data: responseData } = await useFetch('http://localhost:8000/api/contact', {
        method: 'post',
        headers: { "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Headers': '*', },
        body: { 
          name: name.value,
          email: email.value,
          subject: subject.value,
          message:message.value, 
        }
    })

    console.log(responseData.value)
}
</script>
<template>
  <div>
    <form @submit.prevent="contact">
      <div class="">
        <label for="">Name</label>
        <input type="text" v-model="name">
      </div>
      <div class="">
        <label for="">Eamil</label>
        <input type="email" v-model="email">
      </div>
      <div class="">
        <label for="">Subject</label>
        <input type="text" v-model="subject">
      </div>
      <div class="">
        <label for="">Message</label>
        <input type="text" v-model="message">
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>
