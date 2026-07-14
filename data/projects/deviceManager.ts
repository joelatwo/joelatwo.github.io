import type { Project } from "@/types";

const project: Project = {
  title: "Device Manager Website",
  description:
    "When you own a significant amount of products it can be difficult to keep track of them all. The goal was to create a prototype project to handle large amounts of products. This includes table based data, filtering, sorting and searching.",
  status: "Previous",
  content: [
    {
      id: "Overview",
      type: "paragraph",
      text: "During the initial setup of this, we wanted to support a monorepository based structure, where we would have a wrapper ui that would handle the routing and authentication. Then each app would have it's own internals loaded in via an iframe.",
    },
    {
      id: "Prototyping",
      type: "paragraph",
      text: "The initial prototype I helped build was to be completed in 3 months, with the goal of seeing how far we could get. I was tasked with designing the table and the filtering system.",
    },
    {
      id: "ReactStateManagement",
      type: "paragraph",
      text: "Initially, all of the state management was handled through a centralized parent component. At the 4 month mark, after we had completed the prototype I ended up refactoring this into using MobX to streamline everything. Ultimately, this turned into a much more efficient system.",
    },
  ],
  lessonsLearned: [
    {
      id: "Invest",
      type: "paragraph",
      text: "Due to the extrmely tight timeline, I decided to ignore my instincts to look into MobX or any other state management system. I was concerned that spending X amount of time learning the system would put us behind schedule. However, I learned that MobX was extremely easy to work with. Ultimately, keeping everything in Reacts standard state actually lead to tight coupling and made a lot of the code more complex than it needed to be. If I had taken the 1 day to learn MobX (which is how long it took), or even 3-5 days which is what I assumed I would have actually saved time. This taught me a valuable lesson, that improvement of daily work is more important that daily work itself.",
    },
    {
      id: "ProjectManagement",
      type: "paragraph",
      text: "We all know that deadlines and timelines are often arbitrary, but this project really highlighted that. With our initial timeline we worked extremely hard to meet that deadline, but the product ended up not coming out for 2 full years after we had moved. I definitely feel like if I had taken more time for the project things would have gone much more efficently",
    },
  ],
};

export default project;
