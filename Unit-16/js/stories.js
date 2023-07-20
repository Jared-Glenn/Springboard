"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}


async function submitStory(evt) {
  console.debug("submitStory", evt);
  evt.preventDefault();

  // grab the username and password
  const subTitle = $("#submit-title").val();
  const subAuthor = $("#submit-author").val();
  const subUrl = $("#submit-url").val();

  console.log(subTitle);
  console.log(subAuthor);
  console.log(subUrl);

  // User.login retrieves user info from API and returns User instance
  // which we'll make the globally-available, logged-in user.
  await storyList.addStory(currentUser,
    {title: subTitle, author: subAuthor, url: subUrl});

  $submitForm.trigger("reset");
  navAllStories();
}

$submitForm.on("submit", submitStory);