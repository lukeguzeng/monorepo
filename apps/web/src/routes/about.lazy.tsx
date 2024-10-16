import { createLazyFileRoute } from '@tanstack/react-router';
import About from '../components/about';

export const Route = createLazyFileRoute('/about')({
  component: About,
});
