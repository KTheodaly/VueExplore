new Vue ({
    el: "#vue-app",
    data: {
        team: "Nashville Newts",
        name: "Theo",
        nickname: "",
        quote: "",
        age: 25,
        games: 100,
        rate:0,
        hometown: "Charlotte",
        skills: "team work, persistance, positive attitude",
        website: "https://www.linkedin.com/in/theo-daly-96aa66110/",
        x:0,
        y:0
    },
    methods: {
        greet: function(time){
            this.name
            return "Let's win to" + time + ", " + this.name + "!";
        },
        add: function(inc){
            this.age+=inc;
        },
        subtract: function(dec){
            this.age-=dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        nickname: function() {
            console.log("Nickname entered!");
        },
        quote: function() {
            console.log("Quote entered!")
        }, 
    },
    computed: {
        score: function (){
            return this.rate + this.games;
        }
    }
});