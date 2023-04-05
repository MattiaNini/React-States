export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      image: "https://robohash.org/mattia",
      username: "Mattia",
    },
    {
      id: 2,
      todo: "Lorem psum sit",
      completed: false,
      image: "https://robohash.org/nini.png",
      username: "Nini",
    },
  ],
  isModalVisibile: false,
  tempTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },
};
