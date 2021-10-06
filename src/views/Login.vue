<template>
     <div>
        <MenuBar >

            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h3>Login</h3>
                                <form @submit.prevent="GoToProfile()">
                                    <div>{{ error }}</div>
                                    <div class="form-group">
                                        <input type="text" v-model="email" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group mt-4">
                                        <input type="password" v-model="password" class="form-control" placeholder="Password">
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-4 form-control">
                                        Login
                                    </button>
                                </form>
                            </div>
                            <div class="card-footer">
                                Don't have any account? <a href="">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </MenuBar>
    </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue';
export default {
    name : 'Login',
        components :{
            MenuBar,
        },
        data(){
            return{
                email : "",
                password : "",
                error : ""
            }  
        },
        methods : {
            GoToProfile(){
                if(this.email === 'email' && this.password === 'password'){
                    this.$router.push('/profile');
                    localStorage.setItem('key',this.email);
                }else{
                    this.error = 'Error Occor'
                }
            }
        }
    }
</script>

