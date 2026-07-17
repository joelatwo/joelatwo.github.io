import type { Project } from "@/types";

const project: Project = {
  title: "Compiler",
  description: "A compiler for a custom C style programming language.",
  tagList: ["Cancelled", "Education"],
  content: [
    {
      id: "GeneralBackground",
      type: "paragraph",
      text: "My final class for my college degree at the University of Idaho was a compiler class. Over the course of the semester our goal was to build out a fully functioning compiler from a C like language called VandalGo. The core of the project was to be build out using C.",
    },
    {
      id: "FirstAssignment",
      type: "paragraph",
      text: "The first assignment in the class was to build out a lexer which would allow me to define tokens from the text provided. For example <code>int x = 5;</code> would be broken down into the various tokens of the language. This will then be provided as output for the next assignemnt.",
    },
    {
      id: "SecondAssignment",
      type: "paragraph",
      text: "The second assignment was to integrate with our existing output. Correct any mistakes and take groups of symbols and turn them into a stynax tree. In my particular case I made the poor decision to not make it into a full abstract syntax tree. This turned out to be my later detrament and one of the few decisions I would have changed.",
    },
    {
      id: "ThirdAssignment",
      type: "paragraph",
      text: "From there the third assignment was to take the Bison output and perform semantic analysis. This includes ensureing that the program was valid and followed out rules.",
    },
    {
      id: "FourthAssignment",
      type: "paragraph",
      text: "For the 4th assignment we wanted to create an intermediate represntation of the program. This would be a tree like representation that we would then convert into actual code. Unfortunately, due to the timing of this assignment being in my final semester and the amount of rework required this is where I had to put this project on hold.",
    },
  ],
  lessonsLearned: [
    {
      id: "ProgrammingLanguages",
      type: "paragraph",
      text: "A lot of my study within the compiler class was focused around the system of languages and how they translate. This has been extremely helpful for me to understand the metastructure of programming languages. One example of this, it allowed me to understand how javascript converts things down into assembly. From there I was able to determine the issue with state management going on was because the pointer to the object in javascript's internal hadn't updated so it was causing a bug.",
    },
    {
      id: "LLMs",
      type: "paragraph",
      text: "Because of my study of how languages are structured this has also helped me to understand how LLMs actually work. Understanding how to turn a sentance into a syntax tree is how the NLP process ends up working before converting it to vectors.",
    },
  ],
  skills: ["C"],
};

export default project;
