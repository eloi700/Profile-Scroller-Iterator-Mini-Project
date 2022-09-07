//Data
const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Aileen Trump",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "New York USA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

//Variable for Profiles
const profiles = profileIterator(data);

//Call/Display First Profile
nextProfile();

//Next Event Listener
document.getElementById("next").addEventListener("click", nextProfile);

//UI Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    //UI Profile Display
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>`;

    //UI image Display
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //No More Profiles to be Loaded
    window.location.reload();
  }
}

//Iterator Function
function profileIterator(profiles) {
  let nextIndex = 0; // counter

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
