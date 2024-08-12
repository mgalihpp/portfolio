import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Ping from '../elements/Ping';
import { TbArrowUpRight } from 'react-icons/tb';
import Tooltip from '../elements/Tooltip';
import { cn } from '@/lib/utils';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { Skeleton } from '../elements/Skeleton';
import { useRef } from 'react';

type ProjectCardProps = Project;

export default function Card(props: ProjectCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const imageLoaded = useImagePreloader(imgRef);

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="border__color rounded-md bg-transparent shadow-lg transition-transform duration-200 dark:bg-neutral-800 dark:shadow-none lg:hover:scale-[1.03]"
    >
      <Link
        to={props.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${props.name} website demo`}
        className="group flex h-full cursor-pointer flex-col"
      >
        <div>
          {!imageLoaded && <Skeleton className="h-52 w-full rounded-t-md" />}
          <img
            ref={imgRef}
            src={props.image}
            alt={props.imageAlt}
            className={cn('h-auto w-auto rounded-t-md', {
              blur: !imageLoaded,
              'remove-blur': imageLoaded,
            })}
            width={1920}
            height={1080}
            loading="eager"
            aria-label={`Project image of ${props.name}`}
            style={{
              display: imageLoaded ? 'block' : 'none',
            }}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <Ping />

            <h1 className="flex items-center gap-1 font-bold md:text-lg">
              {props.name}
              <span className="transition-all duration-200 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1">
                <TbArrowUpRight />
              </span>
            </h1>
          </div>
          <p className="secondary my-4 text-sm leading-relaxed md:h-[91px]">
            {props.description}
          </p>

          <ul className="flex flex-wrap gap-4">
            {props.techStack.map((tech, index) => (
              <li className="text-2xl" key={index}>
                <Tooltip placement="top" label={tech.label}>
                  <div>{tech.icon}</div>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.li>
  );
}
