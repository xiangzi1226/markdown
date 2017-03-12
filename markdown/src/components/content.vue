    <template id="doc_detail">
        <div>
            
            <span>{{msg}}</span>
               <router-link :to="{ name: 'edit', params: {doc_name: this.$route.params.doc_name }}">编辑</router-link>
        </div>
    </template>
    <script>

export default {

  name: 'doc_detail', 
      data () {
        return {
             msg:""
        }
      },
      mounted:function(id){ 
                   this.$http.get('http://192.168.1.107:1009/cas/doc/content?docName='+this.$route.params.doc_name)
                                      .then(function(response){
                                            this.msg=response.data.data
                                            console.log(response.data)
                                      })
                                      .catch(function(response) {
                                          console.log(response)
                                      })
            }
}
</script>
<style scoped>
    a{
    display:block
    }
</style>