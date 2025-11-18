import Link from 'next/link';

import { format } from 'date-fns';

export default function PostCard(post: any) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href="#" className="">
          Hello world
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(new Date(), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*:last-child]:mb-0 *:mb-3" />
    </div>
  );
}
