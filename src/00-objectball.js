function gameObject() 
{
    const team = 
    {
        home:{teamName: 'Brookln Nets', colors : ['black', 'white'], players : {'Alan Anderson': {'number': 0, 'shoe': 16, 'points': 22, 'rebounds': 12, 'assist': 12, 'steals': 3, 'blocks': 1, 'slamDunks': 1},
        'Reggie Evans': {'number': 30, 'shoe': 14, 'points': 12, 'rebounds': 12, 'assist': 12, 'steals': 12, 'blocks': 12, 'slamDunks': 7},
        'Brook Lopez': {'number': 11, 'shoe': 17, 'points': 17, 'rebounds': 19, 'assist': 10, 'steals': 3, 'blocks': 1, 'slamDunks': 15},
        'Menson Plumlee': {'number': 1, 'shoe': 19, 'points': 26, 'rebounds': 12, 'assist': 6, 'steals': 3, 'blocks': 8, 'slamDunks': 5},
        'Jason Terry': {'number': 31, 'shoe': 15, 'points': 19, 'rebounds': 2, 'assist': 2, 'steals': 4, 'blocks': 11, 'slamDunks': 1},}}
        , away:{teamName : 'Charlotte Hornets', colors : ['turquoise', 'purple'],players: {'Jeff Adrien': {'number': 4, 'shoe': 18, 'points': 10, 'rebounds': 1, 'assist': 1, 'steals': 2, 'blocks': 7, 'slamDunks': 2},
        'Bismak Biyombo': {'number': 0, 'shoe': 16, 'points': 12, 'rebounds': 4, 'assist': 7, 'steals': 7, 'blocks': 15, 'slamDunks': 10},
        'DeSagna Diop': {'number': 2, 'shoe': 14, 'points': 24, 'rebounds': 12, 'assist': 12, 'steals': 4, 'blocks': 5, 'slamDunks': 5},
        'Ben Gorden': {'number': 8, 'shoe': 15, 'points': 33, 'rebounds': 3, 'assist': 2, 'steals': 1, 'blocks': 1, 'slamDunks': 0},
        'Brandon Haywood': {'number': 33, 'shoe': 15, 'points': 6, 'rebounds': 12, 'assist': 12, 'steals': 22, 'blocks': 5, 'slamDunks': 12}}}
    }
  //console.log(team)
    return team;
}
//console.log(gameObject())
console.log(numPointsScored('Brook Lopez'));

function numPointsScored(name){
    for(let place in gameObject()){
        let playerObj = gameObject()[place];
        //console.log(playerObj)
        for(let key in playerObj){
            // console.log(playerObj[key])
          if (key === 'players'){
          for(let player in playerObj[key])
            if(player === name)
            return(playerObj[key][name]['points'])
        // for (let player in key){
        //     console.log(key[player])
        //     //console.log(player)

          
         } 
        } 
    }
  return 'Not Found';
}