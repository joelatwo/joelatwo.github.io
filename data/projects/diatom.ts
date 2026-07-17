import type { Project } from "@/types";

const project: Project = {
  title: "Atomic Design System and Component Library",
  description:
    "A series of react components that make the foundational building blocks to increase speed and consistency.",
  tagList: ["Work"],
  skills: ["React", "Typescript", "Sass"],
  content: [
    {
      id: "Beginning",
      type: "paragraph",
      text: "The marketing asked us to help build and support a design system based on the Atomic Design Principles. This effectively makes building blocks that can be combined in unique nd interesting ways to meet their needs.",
    },
    {
      id: "InitialComponentDesign",
      type: "paragraph",
      text: "I started by building out a large amount of atoms and molecules getting direct feedback from the design director to meet their needs. I helped by managing the setup for a component library leveraging storybook for rapid documentation. This allowed for rapid prototyping of new components and designs built upon the existing system.",
    },
    {
      id: "ProviderInjection",
      type: "paragraph",
      text: "A really cool system that I had a direct hand in designing is allowing for injection of certain components on a global scale. This allows us to support Next.js's image and link components or the traditional html. This occurs by injecting the component definition using context.",
    },
    {
      id: "DefaultVariants",
      type: "paragraph",
      text: "Another big goal was to have a few definied variants and good defaults. Otherwise we end up with a wide variety of situations and it becomes a maintaince nightmare when we want to make changes",
    },
  ],
  lessonsLearned: [
    {
      id: "EdgeCases",
      type: "paragraph",
      text: "The biggest issue with the design system is that sometimes its difficult to predict when a few edge cases will actually end up being a variant in disguise. This caused us to go back and collect those instances up and wrap them into a variant. The other possible option is that it really is multiple edge cases that happen to look the same and we want to keep them separate. Largely I think we found a good balance in the end, but early on in the process we made a few of these mistakes.",
    },
    {
      id: "GoodDefaults",
      type: "paragraph",
      text: "Part of the goal of good defaults is that ideally we want to provide as little as possible to the component to make it render properly. The tradeoff of this is that sometimes we got it wrong. This can cause a lot of work to find all those place where we are relying on those defaults. A big example of this is our buttons ended up with some default margins that we ended up overriding more often than not.",
    },
    {
      id: "PatternRecognition",
      type: "paragraph",
      text: "This leads to the rule of thumb, anytime you do something once it's a 1 off. The second time it might be a coincidence. But the third time and each time thereafter it's important to evaluate whether this is a real pattern in disguise. This can save a lot of instances of overengineering and premature optimization.",
    },
    {
      id: "Maintaince",
      type: "paragrah",
      text: "One thing that greatly surpised me, was the maintaince overhead that the dsign system added. We only had 2 repositories that relied on this system, but as things were being designed it would have benefitted us to use a bit more of a monorepo approach. Especially some form of dynamic repo linking to allow for more rapid iteration.",
    },
  ],
};

export default project;
