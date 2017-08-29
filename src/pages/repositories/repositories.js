export default {
    computed: {
        repos() {
            return this.$root.repos;
        }
    },
    methods: {
        sortRepos(sorting) {
            this.repos.sort((a, b) => {
                if (a[sorting.name] > b[sorting.name]) {
                    return sorting.type === 'asc' ? 1 : -1;
                }

                if (a[sorting.name] < b[sorting.name]) {
                    return sorting.type === 'asc' ? -1 : 1;
                }

                return 0;
            });
        }
    },
    mounted() {
        this.$root.$refs.sidebar.close();
    }
}