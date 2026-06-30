import Link from 'next/link';
import { Button } from '@/components/ui/Button';

type StepNavigationProps = {
  backHref?: string;
  nextHref?: string;
  nextLabel?: string;
  backLabel?: string;
};

export function StepNavigation({ backHref, nextHref, nextLabel = 'Continue', backLabel = 'Previous' }: StepNavigationProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {nextHref ? (
        <Link href={nextHref}>
          <Button>{nextLabel}</Button>
        </Link>
      ) : null}
      {backHref ? (
        <Link href={backHref}>
          <Button variant="secondary">{backLabel}</Button>
        </Link>
      ) : null}
    </div>
  );
}
