    <template id="list">
          <div> 
                <h2>{{msg}}</h2>
                <ul>
                    <li v-for="doclist in list">
                          <router-link :to="{ name: 'content', params: {doc_name:doclist.doc_name }}">{{doclist.doc_name}}</router-link>
                    </li>
                </ul>
          </div>
    </template>
<script>

export default {

  name: 'list', 
      data () {
        return {
        msg:"文档列表",
           list:[],
        }
      },
      mounted:function(id){ 
                   this.$http.get('http://192.168.1.107:1009/cas/doc/docList?docType='+this.$route.params.type_id)
                                      .then(function(response){
                                            this.list=response.data.data
                                            console.log(response.data)
                                      })
                                      .catch(function(response) {
                                          console.log(response)
                                      })
            }
}
</script>