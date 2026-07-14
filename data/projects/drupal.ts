import type { Project } from "@/types";

const project: Project = {
  title: "Drupal Marketing Website",
  description:
    "A traditional CMS based website built using Drupal to show off the capabilities of the company.",
  status: "Previous",
  content: [
    {
      id: "Overview",
      type: "paragraph",
      text: "For this project, I worked on integrating some of the existing drupal components, but heavily customizing their css to make them feel truly custom.",
    },
    {
      id: "Carousel",
      type: "paragraph",
      text: "One particularly difficult component was the carousel. The existing carousel component had icons that were not easily customizable. I ended up needing to learn some complex css selectors to navigate up and down the html tree.",
    },
    {
      id: "CustomComponent",
      type: "paragraph",
      text: "The most difficult challenge that I faced within this project was creating a custom navigational component. The designer wanted a set of 6 trapizoids that fit together to form a list of serivces that we supported. Whenever you click on one of these, it would expand to fill up 90% of the navigation and show a small hint at the next and previous sections. When one of those were clicked it would slide into view and the previous section would shrink back to it's normal pretransitioned size. Additionally on initial load the 6 sections would slide in together.",
    },
  ],
  lessonsLearned: [
    {
      id: "VisualSpecs",
      type: "paragraph",
      text: "Working with something as precise and visual as this custom component, I realized far to late that I should have been hopped on a call with the designer to see the vision. Words weren't sufficient for this.",
    },
    {
      id: "SourceControl",
      type: "paragraph",
      text: "One major issue we had with this project is that we didn't put anything into source control. When we went to do our initial prototype release everything got deleted at one point. I think we would have done better to put some of the code into source control.",
    },
  ],
};

export default project;
