/** How a project runs: Scrum delivery, step by step, plus the habits behind it. */

export type ProcessStep = { title: string; description: string }

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description: 'We map the workflow, the users and what “done” means before any code.',
  },
  {
    title: 'Backlog & estimate',
    description: 'User stories with acceptance criteria, prioritised and sized together.',
  },
  {
    title: 'Two-week sprints',
    description:
      'Small, reviewed increments. Each sprint ends with a demo on a staging link you can try yourself.',
  },
  {
    title: 'Release',
    description:
      'Automated tests on every change, and load tests before launch when traffic matters.',
  },
  {
    title: 'Support & retro',
    description: 'Hand-over docs, monitoring and a retro on what to improve next round.',
  },
]

export const practices = [
  'User stories & acceptance criteria',
  'Pull-request review',
  'CI/CD pipelines',
  'Jest & PHPUnit',
  'Selenium end-to-end tests',
  'JMeter load tests',
  'Role-based access by default',
  'Hand-over documentation',
]
