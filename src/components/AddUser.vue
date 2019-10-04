<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="user.name"/>
                    </div>
                    <div class="form-group">
                        <label>Age:</label>
                        <input type="text" class="form-control" v-model="user.age"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-info" value="Add User"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        addUser() {
            let uri = 'https://reqres.in/api/users';
            this.axios.post(uri, this.user).then((response) => {
                console.log(response.data);
                this.$toasted.show("User successfully added..!");
            });
        }
    }
}
</script>