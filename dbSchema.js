// this is  the DB structure

let db = {
  users: [
    {
      userId: "adkfjslflsjfo12123234",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-03-15T10:59:52.7982",
      imageUrl: "image/ldjlfjalsfjlasjflasjf",
      bio: "Hello, my name is user",
      website: "htttp://user.com",
      location: "New York, US",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "this is the body of the scream",
      createdAt: "2020-05-02T11:46:01.018Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "ldjfoasurwourow",
      body: "nice one mate!",
      createdAt: "2019-03-15T10:59:52.7982",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      screamId: "ldkjflasjdfklsajlfasf",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.7982",
    },
  ],
};

const userDetails = {
  // Redux Data
  credentials: {
    userId: "adkfjslflsjfo12123234",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.7982",
    imageUrl: "image/ldjlfjalsfjlasjflasjf",
    bio: "Hello, my name is user",
    website: "htttp://user.com",
    location: "New York, US",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "howeroqwu9480ur97",
    },
    {
      userHanle: "user",
      screamId: "ladjfiugoh0980rq0",
    },
  ],
};
