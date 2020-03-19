console.log(tweets)

const tweet1 = () => {
    document.querySelector('#tweet1 .username').innerHTML = tweets.statuses[0].user.name;
    document.querySelector('#tweet1 .date').innerHTML = tweets.statuses[0].created_at;
    document.querySelector('#tweet1 .message').innerHTML = tweets.statuses[0].text;
    document.querySelector('#tweet1 .handle').innerHTML = "@" + tweets.statuses[0].user.screen_name;
    document.querySelector('#tweet1 .likes').innerHTML = tweets.statuses[0].favorite_count + " Favorites";
    document.querySelector('#tweet1 .retweets').innerHTML = tweets.statuses[0].retweet_count + " Retweets";
}

const tweet2 = () => {
    document.querySelector('#tweet2 .username').innerHTML = tweets.statuses[1].user.name;
    document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[1].created_at;
    document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text;
    document.querySelector('#tweet2 .handle').innerHTML = "@" + tweets.statuses[1].user.screen_name;
    document.querySelector('#tweet2 .likes').innerHTML = tweets.statuses[1].favorite_count + " Favorites";
    document.querySelector('#tweet2 .retweets').innerHTML = tweets.statuses[1].retweet_count + " Retweets";
}

const tweet3 = () => {
    document.querySelector('#tweet3 .username').innerHTML = tweets.statuses[2].user.name;
    document.querySelector('#tweet3 .date').innerHTML = tweets.statuses[2].created_at;
    document.querySelector('#tweet3 .message').innerHTML = tweets.statuses[2].text;
    document.querySelector('#tweet3 .handle').innerHTML = "@" + tweets.statuses[2].user.screen_name;
    document.querySelector('#tweet3 .likes').innerHTML = tweets.statuses[2].favorite_count + " Favorites";
    document.querySelector('#tweet3 .retweets').innerHTML = tweets.statuses[2].retweet_count + " Retweets";
}

const showAll = () => { 
    var arrayLength = tweets.statuses.length;
    
    for (var i = 0; i < arrayLength; i++) {
        
        newDiv = document.createElement('div');
        newDiv.className = 'twitterClassOne';
        
        var textWrapper = document.createElement('div');
        textWrapper.className = "text";
        
        var textContents = document.createTextNode(tweets.statuses[i].text);
        textWrapper.appendChild(textContents);
        
        var userWrapper = document.createElement('div');
        userWrapper.className = "user";
        
        var userContents = document.createTextNode(tweets.statuses[i].user.name + " @" + tweets.statuses[i].user.screen_name);
        userWrapper.appendChild(userContents);
        
        var engagementWrapper = document.createElement('div');
        engagementWrapper.className = "engagement";
        
        var engagementContents = document.createTextNode(tweets.statuses[i].favorite_count + " Favorites " + tweets.statuses[i].retweet_count + " Retweets")
        engagementWrapper.appendChild(engagementContents);
        
        newDiv.appendChild(userWrapper);
        newDiv.appendChild(textWrapper);
        newDiv.appendChild(engagementWrapper);
        newDiv.appendChild(document.createElement('br'));
        
        document.getElementById('all').appendChild(newDiv);
    }
}