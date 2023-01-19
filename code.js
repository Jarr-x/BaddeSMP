/* notes: The 'down' class causes the dropdown list to go down and the 'steam-container' to gain extra margin on the bottom increasing the spacing
The 'hide' class sets the display property of the element to 'none' causing it to not display on the page
*/
console.log("code is load");

function dropdown(id) {
  //toggle the 'down' class of the container and description with the corresponding id (the button sends the id of its parent element as an argument)
  console.log('Toggling description: ' + id);
  let streamContainer = document.getElementById(id);
  let description = streamContainer.getElementsByClassName('description')[0];
  description.classList.toggle('down');
  streamContainer.classList.toggle('down');
}

function search() {
  //get the search keyword and the list of all videos
  let keyword = document.getElementsByClassName('search-bar')[0].value;
  let videos = Object.values(document.getElementsByClassName('stream-container'));

  //for each video unhide it then get the tags and check if they contain the keyword and if they don't, hide the video
  videos.forEach(video => {
    video.classList.remove('hide');
    let tags = video.getElementsByClassName('description')[0].innerHTML.split(',');
    if (!checkForKeyword(tags, keyword)) {
      console.log('hide a video');
      video.classList.add('hide');
    }
  })
}

function checkForKeyword(tags, keyword) {
  //checks a list of stings to see if any of them contain the keyword
  for (i = 0; i < tags.length; i += 1) {
    if (tags[i].includes(keyword)) {
      console.log(`"${tags[i]}" includes: "${keyword}"`);
      return true;
    }
  }
  return false;
}