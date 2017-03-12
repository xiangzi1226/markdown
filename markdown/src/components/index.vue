<template>  
    <div class="index">  
                 
                <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                      创建文档类型
                  </button>
                 <!-- 模态框（Modal） -->
                      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h4 class="modal-title" id="myModalLabel">添加文档类型信息</h4>
                                  </div>
                                  <div class="modal-body">
                                            <label for="one">添加类型名称</label>
                                            <input type="text" id="one" v-model="typename">
                                            <br>
                                            <label for="two">添加类型ID</label>
                                            <input type="text" id="two"  v-model="typeid">
                                  </div>
                                  <div class="modal-footer">
                                      <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                      <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="create">创建</button>
                                  </div>
                              </div><!-- /.modal-content -->
                          </div><!-- /.modal-dialog -->
                      </div>
             <!-- /.modal -->
                <router-link to="/newDoc">  
                       <h3 class="new">创建文档</h3>  
                </router-link>  
         <ul class="main-nav">  
                    <h2>{{msg}}</h2>
                    <li v-for="typelist in list">
                             <router-link :to="{ name: 'list', params: {type_id: typelist.type_id }}">{{typelist.type_name}}</router-link>
                    </li>
        </ul>  
    </div>  
</template>  
<script>

export default {
  name: 'index', 
      data () {
        return {
        msg:"文档类型列表",
           list:[],
           typename:"",
           typeid:""

        }
      },
       methods: {
          create:function(){
          console.log(this.typename)
          console.log(this.typeid)
                    this.$http.post('http://192.168.1.107:1009/cas/doc/createType',{typeName:this.typename,typeId:this.typeid},{emulateJSON:true})
                                      .then(function(response){
                                          console.log(response.data)
                                        
                                      })
                                      .catch(function(response) {
                                          console.log(response)
                                      })
          }
        },
      mounted:function(){ 
                   this.$http.get('http://192.168.1.107:1009/cas/doc/docTypeList')
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
<style scoped>

 a{
   text-decoration:none
 }
 li{
      list-style:none
 }
</style>