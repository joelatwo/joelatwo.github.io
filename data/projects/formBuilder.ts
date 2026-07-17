import type { Project } from "@/types";

const project: Project = {
  title: "Form Builder Project",
  description:
    "A project to create dynamic forms that share a common structure.",
  tagList: ["Work"],
  skills: ["React", "Typescript", "C#", "EfCore", "MySql"],
  content: [
    {
      id: "GeneralBackground",
      type: "paragraph",
      text: "Within my time at the Idaho State Government I worked on a project with the goal of migrating 3 legacy form based websites to a sleek new design. The long term goal is to create a centralized hub where any employee could view and modify the existing form data.",
    },
    {
      id: "Refactor",
      type: "paragraph",
      text: "One difficulty we encountered is that the customer doesn't always know what the new format should be. This led to a lot of churn, and to help mitigate this process I helped refactor large chunks of the codebase to use composition. This would allow us to make more rapid changes and have flexibility in implentation if 2 forms differed in large ways. This allowed us to make larger chunks of functionality to speed up the general development lifecycle.",
    },
    {
      id: "Reporting",
      type: "paragraph",
      text: "The next major project I started working on was a flexible table system for reporting. The goal was to create a setup where a new table needed to define the columns and handle the server side searching, but all other aspects would be handled within the table logic. This included dynamic url linking, filtering, sorting, and pagination all managed within the ui. We also made this work reasonably well in mobile where it was obvious how many columns existed and you could navigate them all.",
    },
  ],
  lessonsLearned: [
    {
      id: "DataGenerating",
      type: "paragraph",
      text: "One of my major goals with this project was to hook up a database system along with a form builder. THe idea being we could dynamically modify the forms from a page for more rapid prototyping. This effort ultimately failed, as it caused too much overhead and a lack of confidence in our ability to give access to the database via the form builder. I learned that sometimes it's not worth the added infastructure required. Partially building out this extra functionality, caused the system to be more complex than needed for the potential of updating the form a few times a year.",
    },
    {
      id: "Prototyping",
      type: "paragraph",
      text: "Prototyping is an essential part of the development process and some curstomers don't always have a clear vision for what they want the system to be like. I learned that sometimes doing a quick html prototype wasn't actually the right approach, when a customer needs to see it in front of them. I would have been a lot better off meeting with the customer with several pieces of paper and have them fill out their vision using blocks. But at other times, it's better to build out more of the functionality so that you can get the feel of things.",
    },
  ],
};

export default project;
