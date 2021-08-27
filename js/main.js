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
