<template>  
    <div class="edit">  
              
              <button class="button">
                    <span>嗨，左边输入markdown语句，右边实时预览</span> 
             </button>
              <form class="form">
                    <textarea id="content" v-on:input="compile" rows="6" cols="60" >{{msg}}</textarea>
                    <input type="button" value="提交" class="submit" v-on:click="submit">
              </form>
              <div id="result"></div>
    </div>  
</template>  

<script>
import "../assets/js/edit.js"
export default {
   
 data () {
        return {
             msg:"",
        }
      },
      methods: {
              compile :function(){
                            var text = document.getElementById("content").value;
                            var converter = new showdown.Converter();
                            var html = converter.makeHtml(text);
                            document.getElementById("result").innerHTML = html; 
                         },
              submit:function(){
              console.log(this.$route.params.doc_name)
              console.log(this.msg)
                    this.$http.post('http://192.168.1.107:1009/cas/doc/edit',{docContent:this.msg,docName:this.$route.params.doc_name},{emulateJSON:true})
                                      .then(function(response){
                                          console.log(response.data) 
                                      })
                                      .catch(function(response) {
                                          console.log(response)
                                      })
              }

      
      },
      mounted:function(){ 
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
body{
    padding:0.3rem;
}
.button{
    width:100%;
    padding:0.07rem;
    text-align:center;
    font-size:0.3rem;
}
.form{
    width:49%;
    float:left
}
.submit{
    float:left;
    width:100%;
    text-align:center;
    height:0.5rem;
    line-height:0.2rem;
    font-size:0.3rem;
}
#content{
    width:100%;
    height:7.68rem;
    font-size:0.22rem;
    border:none;
    background:#F9F9F5;
    float:left;
    resize:none;
    outline:none;
}
#result{
    border:none;
    float:right;
    width:49%;
    background:#F9F9F5;
    overflow:auto;
    margin-left:2%
}

</style>
