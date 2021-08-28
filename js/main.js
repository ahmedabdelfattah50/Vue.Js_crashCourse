// ========= Start myApp_1 Vue.Js =========
var vm = new Vue({
    el: "#myApp_1",
    data: {
        name: "Ahmed",
        rawHtml: "<pre>This HTML item is from vueJs</pre>"
    },
    methods: {
        sayHello: function(){
            console.log("Hello " + this.name);
        }
    }
});
// ========= End myApp_1 Vue.Js =========

// ========= Start myApp_2 Vue.Js =========
var vm = new Vue({
    el: "#myApp_2",
    data: {
        myId: "testBinding",
        type: "M",
        counter: 0,
        counterStop: ""
    },
    methods: {
        increaseFun: function(){
            this.counterStop = ""
            this.counter++;
        },
        decreaseFun: function(){
            if(this.counter != 0){
                this.counter--;
            } else {
                this.counterStop = "Sorry, The small number is (0)"
            }
        }
    }
});
// ========= End myApp_2 Vue.Js =========