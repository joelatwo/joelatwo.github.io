import type { Project } from '@/types';

const project: Project = {
  "title": "CICD",
  "description": "My journey creating CI/CD Pipelines",
  "status": "Completed",
  "content": [
    {
      "type": "paragraph",
      "text": "One of my first projects was to convert the old CICD pipeline to to a new Jenkinsfile based approach. This involved setting up Jenkins on my local machine and replicating the build process there. From there I switched our existing process to use a jenkinsfile. THis taught me a lot about how pipelines worked as previously I had just run builds and tests locally."
    }, {
      "type": "paragraph",
      "text": "Having the Jenkinsfile based pipeline approach working for our production pipeline was my first real 'enterprise' challenge and made me quite nervous. This new approach and improvements I made along the way inclduing incorporating agents actually increased our stability and efficiency in the pipeline process. We saved 2 full minutes and had nearly 100% build success during my tenure there."
    }, {
      "type": "paragraph",
      "text": "Eventally, we decided to build out a new process and migrate some of our existing codes to Azure Devops. This included converting some of our existing Jenkins pipelines to Devops Pipelines. With the knowledge, that had been aquired I was able to quickly get us up and rnning in Azure Devops and replicate those pipelies for new projects."
    }
  ],
  "lessonsLearned": [
    {
      "type": "paragraph",
      "text": "While I had no prior CI/CD experience to this, I really feel like I dropped the ball by not going above and beyond what was required. I learned the bare minimum to get by in all 3 environments, and have since learned how many more techniques I could have employed. The biggest one was separating the CI from the CD to make 2 pipelines. I'd love to go back and study it far more and look for opportunities to improve the setup."
    },
    { 
      "type": "paragraph",
      "text": "This was my first major project in my career working with an actual enterpirse solution. Given this, I didn't take the time to do background research into CICD that I would do now. This would have given me a lot more useful context and made me a lot faster/stronger at this process. I would have also spent more time reaching out ot my boss when I got stumped. I had a lot of fear about bothering him too much, but I was genuinely stuck and pushed through that wasting some time. Lukily, I had a good support system and was taught the right way to handle things."
    }
  ]
};

export default project;
