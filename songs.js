var songs = ["My Humps", "Communist Eyes", "SweatShirt", "It's Everyday Bro", "Under The Sea", "I'll Make a Man Out Of You", "Help Me Help You", "Hammer Time", "Eye Of The Tiger", "Caso Cerrado", "Goofy Goober", "Shooting Star", "Dance Till You're Dead", "jonathan interiano", "scott", "javier", "lissette", "rodolfo", "twin", "rafa", "brian", "john rodriguez", "dre", "brandon green"]

// console.log(students.length)
function sortsongs(songssArray, size){
    var groups = [ ]
    var currentGroup = [ ]
    // Loop over all the songs
    while (songsArray.length > 0) {
        // pick a random number
        var randomNumber = Math.floor(Math.random() * songssArray.length)
        // pick a random song
        var randomStudent = songsArray[randomNumber]
        // add random songs to current group
        currentGroup.push(randomsongs)
        // delete the random songs
        songsArray.splice(randomNumber, 1)
        // if the group size is large enough
        // add them to the groups array
        if (currentGroup.length >= size) {
            groups.push(currentGroup)
            // reset the current group
            currentGroup = [ ]
        }
    }
    
    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }
    
    for (var i = 0; i < groups.length; i++){
        console.log('Group #'+(i+1)+": "+groups[i])
    }
}

sortsongs(songs, 2)