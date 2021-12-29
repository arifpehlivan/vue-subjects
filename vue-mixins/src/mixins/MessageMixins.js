const MessageMixins={
    data(){
        return{
            text: ""
        }
    },
    methods:{
        sendMessage(){
            alert(this.text)
        }
    }
}

export default  MessageMixins