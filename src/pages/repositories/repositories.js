import ReposTable from './../../components/repositories-table/RepositoriesTable.vue';

export default {
    computed: {
        repos() {
            return this.$root.repos;
        }
    },
    mounted() {
        this.$root.$refs.sidebar.close();
    },
    components: {
        ReposTable
    }
}