<template>
    <div id="vue-app">            
        <div class="header">
            <div class="firstH">
                <i class="gg-menu"></i>
                <p>To Do List</p>
            </div>
            <div class="secondH">
                <p>All</p>
                <p>Done</p>
                <p>Undone</p>
            </div>
        </div>

        <div id="add">
            <input type="text" id="text" placeholder="add new task" v-model="text">
            <button id="btn" v-on:click="addText()">ADD</button>
        </div>

        <div id="box" v-for="(text,index) in texts" :key="text">
            <div class="first">{{ text }}</div>
            <div class="second"> 
                <i class="fa fa-trash-o fa-lg trash" v-on:click="textDelete(index)"></i>
                <i class='fa fa-edit fa-lg edit' v-on:click="textChange(index)"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        text:"",
        texts: [],
        change: false,
        index : null,
    }
  },
  methods:{
    addText:function(){           
        if(this.text != ""){
            if(this.change == false)
            {
                this.texts.push(this.text);
                this.text = "";
            }            
            if(this.change == true && this.text != "")    
            {
                this.texts[this.index] = this.text;
                this.change = !this.change; 
                this.text = "";            
            }                
        }    
        else
            alert("You cannot enter an empty value!");
    },
    textChange:function(index){
        this.text = this.texts[index];
        this.change = !this.change
        this.index = index;
    },
    textDelete:function(index){
        this.texts.splice(index, 1);
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

body {
    background:#192736;
}

#add{
    display:flex;
    justify-content:center;
    padding:20px;
    align-items:center; 
}

#btn{
    background-color: #0c1627;
    color: #a9a9ab;    
    height: 38px;
    width: 100px;
    border-radius: 5px;
    border: none;
}

#text{
    background-color: #192736;
    color: a9a9ab;
    height: 28px;
    margin-right: 8px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom-color: #0c1627;
    width: 250px;
    border-width: 3px;    
}

#box{
    height: 50px;
    width: 360px;
    background-color: #0c1627;
    margin:0 auto;
    margin-bottom: 15px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-left: 5px solid #b44447;
}

.trash{
    color: #b44447;
    margin-right: 7px;
}

.edit{
    color: green;
    margin-right: 7px;
}

.first{
    margin-left: 5px;
    color: #a9a9ab;
}

input[placeholder]{
    color: #a9a9ab;

}

.header{
    height: 50px;
    width: 360px;
    margin:0 auto;
    margin-bottom: 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #a9a9ab;
}

.firstH{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 5px;

}

.secondH{
    display:flex;
    align-items: center;
    margin-left: 10px;
    justify-content: flex-end;

}

p{
    margin-left: 10px;
}
</style>
