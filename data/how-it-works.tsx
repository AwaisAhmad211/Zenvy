export interface WorkStep {
  id: string;
  name: string;
  text: string;
  cta?: { label: string; href?: string };
}

export const stepsData: WorkStep[] = [
  {
    id: '01',
    name: 'Paste Product Link',
    text: 'Copy the URL from Amazon, Nike, Apple Store, or any of 200+ US stores. Our system auto-fetches all details.',
    cta: { label: 'Try It Now', href: '#' },
  },
  {
    id: '02',
    name: 'We Purchase & Verify',
    text: 'Our team purchases your item, does a quality check, and professionally packages it for international shipping.',
  },
  {
    id: '03',
    name: 'Track & Receive',
    text: 'Real-time tracking from our warehouse to your door. Express options available. 7-day return guarantee.',
  },
];
