import type { Project } from "@/types";

const project: Project = {
  title: "SchedulingApp",
  description:
    "This app was designed to keep track of a large number of employee schedules, that are constantly changing.",
  status: "Previous",
  content: [
    {
      id: "Overview",
      type: "paragraph",
      text: "When working with students they tend to have some weird schedules. Some students would go to work, then go to a class or 2, and then come back to work. This created a variety of schedules and made it hard to keep track of anyone.",
    },
    {
      id: "Schedules",
      type: "paragraph",
      text: "The first goal was allowing students to submit schedules. This was done by creating some temporary schedule object that could then be approved. Because we worked as a software company it makes sense to have minimum amounts of time for the schedule, keep track of hours, but also maintain maximum flexibility.",
    },
    {
      id: "MeetingTimes",
      type: "paragraph",
      text: "One immediate problem we had was to find time for our standups. Everyone has a different schedule, so finding a time for everyone was impossible so I was tasked with creating an algorithm to find the best times. The way I started doing this, was whiteboarding. It's a tough problem when schedules can be at any time. What I ended up doing, was finding the earliest schedule and the last schedule. I then would take the duration of the meeting and loop through the time intervals, keeping track of who could attend. This created a list of meeting times based on their potential, I then sorted by the largest number of attendees in the list. Unfortunately, due to the original spec this code 'worked', but it never felt like it was working. Due to some investigations, what we realized is the best approach was to display the list of meeting times and let a human decide based on the numbers.",
    },
    {
      id: "Homepage",
      type: "paragraph",
      text: "The homepage was designed with a pretty ambitious goal, we wanted to build out multiple widgets and let the user modify the size, order, and visibility of the widgets. I thought it would be an interesting challenge, so I got to work trying to design a state management system where the components would be loaded dynamically. To make things more efficient I used an object where each widget had a lot of props and used state management. This system while difficult to manage, ended up becoming quite efficient.",
    },
  ],
  lessonsLearned: [
    {
      id: "SolvingTheRightProblem",
      type: "paragraph",
      text: "This being my first software engineering job, I was assigned a user story and I would work on it until it was done. Then I would double check that I got everything correct. Generally, this was a mistake because I didn't really understand the context of why I was doing the story. What often would happen is I'd find out the work needs to be modified, do that too, and then modify it further. What would have been much better, was discuss the problem more with the customer. This would allow me to tweak the work along the way, and build a solution that actually makes the customer happy.",
    },
    {
      id: "TechDebtMatters",
      type: "paragraph",
      text: "One thing that kept happening to me repeatedly, our skills would improve as we were all fairly new to programming. Unfortunately, as the needs of the project evolved none of us felt comfortable modifying the old code. What I then discovered as I got a bit more experience is that it's ok to go back through and rebuild the code. This created some real opportunities and made them far easier to modify. I honestly wish I had pushed for doing this sooner.",
    },
  ],
};

export default project;
