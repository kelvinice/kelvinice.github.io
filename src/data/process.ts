/** "How I work": Scrum/Agile delivery, step by step, plus the habits behind it. */

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
    description: 'Small, reviewed increments. You always know what is being built and why.',
  },
  {
    title: 'Demo every sprint',
    description: 'Working software on a staging link, not slides. Feedback goes straight back in.',
  },
  {
    title: 'Release',
    description: 'Automated checks, load testing where it matters, then a calm deploy.',
  },
  {
    title: 'Support & retro',
    description: 'Hand-over docs, monitoring and a retro on what to improve next round.',
  },
]

export const practices = [
  'User stories & acceptance criteria',
  'Git flow with pull-request review',
  'CI/CD pipelines',
  'Unit & integration tests (Jest, PHPUnit)',
  'End-to-end tests (Selenium)',
  'Load & stress tests (JMeter)',
  'Role-based access by default',
  'Documentation & hand-over',
]
