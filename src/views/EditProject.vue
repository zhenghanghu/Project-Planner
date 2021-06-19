<template>
<form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="title" required>
      <label>Details</label>
      <textarea v-model="details" required></textarea>
      <button>Update Project</button>
</form>
</template>

<script>
import {projectFirestore} from '../../firebase/config'

export default {
    props: ['id'],
    data(){
        return {
            uri: 'http://localhost:3000/projects/' + this.id,
            title: '',
            details: ''
        }
    },
    mounted(){
        const get = async () => {
            var project = await projectFirestore.collection('projects').doc(this.id).get()
            project = project.data()
            this.title = project.title
            this.details = project.details
        }
        get()
    },
    methods: {
        handleSubmit(){
            const update = async () => {
                await projectFirestore.collection('projects').doc(this.id).update({title: this.title, details: this.details})
                this.$router.push('/')
            }
            update()
            
        }
    }

}
</script>

<style>

</style>