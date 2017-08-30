import UserCard from './../../components/user-card/UserCard.vue';

export default {
    computed: {
        user() {
            return this.$root.user;
        }
    },
    mounted() {
        this.$root.$refs.sidebar.close();
    },
    components: {
        UserCard
    }
}