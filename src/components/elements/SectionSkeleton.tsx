import { Skeleton } from './Skeleton';
import { cn } from '@/lib/utils';

export function SectionSkeleton({
  lines = 4,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col gap-3 py-4', className)} aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className="h-16 w-full"
          style={{ opacity: 1 - i * 0.15 }}
        />
      ))}
    </div>
  );
}
