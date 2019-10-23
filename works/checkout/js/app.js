var vue = new Vue({
    el:'#app',
    data:{
        active: 1,
        step: 1,
        quantity: 1,
        price: 20.99,
        currency: '$',
        tax: 5.32,
        shipping: 5.99,
        name: '',
        phone: '',
        email: '',
        field1: '',
        error: [],
    },
    methods:{
        subTotalPrice: function () {
            let result = this.quantity * this.price;
            return result.toFixed(2);
        },
        totalPrice: function () {
            let result = this.tax + this.shipping + (this.quantity * this.price);
            return result.toFixed(2);
        },
         validate: function(){
    //         // if(this.name.length < 2){
    //         //     this.error.push('name');
    //         // }
    //         // if(this.phone.length < 2){
    //         //     this.error.push('phone');
    //         // }
    //         // if(this.email.length < 2){
    //         //     this.error.push('email');
    //         // }
    //         // if(this.field1.length < 2){
    //         //     this.error.push('field1');
    //         // }
    //
        }
    }
});