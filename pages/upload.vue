<template>
  <form method="post" ref="formElem" @submit.prevent="upload">
    <input type="file" ref="file">
    <input type="text" name="dopinfo" v-model="dopinfo" placeholder="Доп. информация">
    <input type="submit" value="Отправить">
  </form>

</template>

<script setup lang="ts">
const dopinfo = ref('')
const file = ref(null)
const formElem = ref(null)
const upload = async ()=>{
  // const fileref = file.value as never as HTMLInputElement
  // if (fileref.files) {
  //   const fD = new FormData()
  //   fD.append('file', fileref.files[0])
  //   fD.append('dop', dopinfo.value)

  //   console.log(fileref.files[0])
  // }
  if (formElem.value) {
    const data = await $fetch('/api/add_file', {
      method: 'POST',
      body: new FormData(formElem.value)
    })
    console.log(data)
  }

}

</script>