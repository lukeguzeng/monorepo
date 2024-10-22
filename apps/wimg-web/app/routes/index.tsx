import { createFileRoute } from '@tanstack/react-router';
import { Card } from '@repo/ui/card';

export const Route = createFileRoute('/')({
  component: Home,
});

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
];

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
