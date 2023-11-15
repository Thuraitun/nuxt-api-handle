<script setup>
  const form = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const isLoading = ref(false);
  const errors = ref([]);
  const router = useRouter();
  const contact = async () => {
    const { data, pending, error, refresh } = await useFetch(
      `api/contact`,
      {
        method: "POST",
        body: form.value,
        
        onResponseError({ request, response, options }) {
          console.log('gg',response)
        }
      }
      
    );
  };


  const { data: contacts} = await useFetch(`api/contact`)
  console.log(contacts.name)
</script> 

<template>
  <div class="flex justify-center my-40">
    <div class="bg-slate-300 p-20">
      <h2 class="text-teal-500 font-bold text-[25px] text-center my-5">Create Form</h2>
      <form @submit.prevent="contact">
        <div class="mb-4 space-x-4">
          <label for="">Name</label>
          <input type="text" class="shadow-md p-2 rounded-md" v-model="form.name">
        </div>
        <div class="mb-4 space-x-4">
          <label for="">Eamil</label>
          <input type="email" class="shadow-md p-2 rounded-md" v-model="form.email">
        </div>
        <div class="mb-4 space-x-4">
          <label for="">Subject</label>
          <input type="text" class="shadow-md p-2 rounded-md" v-model="form.subject">
        </div>
        <div class="mb-4 space-x-4">
          <label for="">Message</label>
          <input type="text" class="shadow-md p-2 rounded-md" v-model="form.message">
        </div>
        <div class="flex justify-center">
          <button class="py-2 px-4 bg-teal-500 text-white rounded-md" type="submit">Send</button>
        </div>
      </form>
    </div>

    <!-- result -->
    <div class="">
        {{ contacts }}
    </div>
    <!-- result end -->
  </div>
</template>
