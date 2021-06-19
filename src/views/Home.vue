<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="filterHandle" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'
import { projectFirestore } from '../../firebase/config'

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data(){
    return {
      projects: [],
      current: 'all'
    }
  },
  mounted(){

    const load = async () => {
      var res = await projectFirestore.collection('projects').get()
      this.projects = res.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })
    }
    load()
  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    filterHandle(by){
      this.current = by;
    }
  },
  computed: {
    filteredProjects(){
      if( this.current === 'completed' ) return this.projects.filter(project => project.complete)
      else if (this.current === 'ongoing')  return this.projects.filter(project => !project.complete)
      return this.projects
    }
  }
}
</script>
