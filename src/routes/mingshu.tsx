import { createFileRoute } from '@tanstack/react-router';
import MingShuPage from '../pages/MingShuPage';

export const Route = createFileRoute('/mingshu')({
  component: MingShuPage,
});
