export default {
    props: {
        repos: {
            type: Array,
            required: true
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
    }
};