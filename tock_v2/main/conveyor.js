const anime = require('animejs');
const myBite = require('./bite.js').BiteObj;
let myRequest = require('./bite.js').feedlyGet;

//  Set up the conveyor belt
//    Conveyor belt is an animation runner that checks whether or not the bite has made it across the screen and, if so, calls the appropriate function to move it to the back of the queue.
let Conveyor = {
    bounds: screen.width,
    pushBite: function () {
        // Animate the bite across the screen.
    },
    popBite: function () {
        // Take the bite from the front of the queue and move it to the back of the queue.
    },
    stopRolling: function () {
        // Pause the conveyor belt. To be used on hover.
    }
}

// Gather articles
//    Calls myRequest to fill an array with JSON data.
// Create bites
//    Feeds JSON from the array of article data into a Bite creator that fills an array with Bites.
let feedMachine = {
    raw_feed_data: [],
    bite_list: [],
    generateBites: function() {
        this.raw_feed_data.forEach( element => {
            element["items"].forEach( item => {
                if(item.visual) {
                    this.bite_list.push( myBite( item.title, "icon", item.summary.content,item.visual.url, "num", item.published, item.canonicalURL));
                }
                else {
                    this.bite_list.push( myBite( item.title, "icon", item.summary.content, "photo", "num", item.published, item.canonicalURL));
                };
            });
        });
    }
};


let feed_instance = Object.create(feedMachine);


myRequest("https://cloud.feedly.com/v3/subscriptions")
.then (
    data => {
        let id_array = [];
        data.forEach(element => {
            id_array.push(encodeURIComponent(element.id));
        });
        return id_array;
    })
.then (
    ids => {
        ids.forEach(
            element => {
                myRequest("https://cloud.feedly.com/v3/mixes/contents?streamId=" + element + "&count=5")
                .then(
                    content => {
                        feed_instance.raw_feed_data.push(content);
                    })
            });
    })
.catch (
    fail => 
    {
        console.log("Failed to fetch data.");
    });



// Put bites out on the belt
//    Call the conveyor belt's animator to push the bites across the screen.