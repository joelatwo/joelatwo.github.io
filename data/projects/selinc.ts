import type { Project } from '@/types';

const project: Project = {
  "title": "Selinc.com",
  "description": "A large public marketing website migration from AngularJS to React. This includes translation, zero downtime, and gradual migration.",
  "status": "Previous",
  "content": [
    {
      "type": "paragraph",
      "text": "The goal for this website was to migrate from an old AngularJS website to a modern React website. This process was planned to take 2 years, which required us to build a system to allow for the strangler pattern. In addition, we wanted to migrate from an old headless CMS to a newer headless CMS."
    },
    {
      "type": "paragraph",
      "text": "This lead to some technical challenges where I was tasked with creating a prototype site, where both the AngularJS ad React pages were currently availiable. Doing research we settled upon Next.js as it allwed for improved routing, image optimization, and translations. The solution was to setup the React pages to redirect to the AngularJS pages if they page isn't a known route. The AngularJS site would have a list of known React routes to redirect as well. Otherwse we navigate to a 404 page."
    },
    {
      "type": "paragraph",
      "text": ""
    },
    {
      "type": "paragraph",
      "text": ""
    },
    {
      "type": "paragraph",
      "text": ""
    }
  ],
  "lessonsLearned": [
    {
      "type": "paragraph",
      "text": ""
    },
    {
      "type": "paragraph",
      "text": ""
    }
  ]
};

export default project;
