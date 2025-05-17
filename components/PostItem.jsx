import React from 'react';
import Link from 'next/link';
import { cleanUnicode } from '../utils/cleanUnicode';

export default function PostItem({ post }) {
  // Debug log for server/client
  if (typeof window === 'undefined') {
    console.log('SERVER BODY:', JSON.stringify(post.body));
  } else {
    console.log('CLIENT BODY:', JSON.stringify(post.body));
  }
  // Truncate body for preview
  const truncatedBody = post.body ? cleanUnicode(post.body).slice(0, 180) + '..' : '';

  return (
    <div className="bg-[#F9FAFB] rounded border border-slate-200 mb-4">
      <div className="relative p-5">
        <div className="flex items-center space-x-4 mb-2">
          {post.avatar && (
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
          )}
          <div>
            <h2 className="mb-1">
              <Link className="text-primary font-semibold hover:underline transition duration-150 ease-in-out" href={"/post/" + post.id}>
                {post.title}
              </Link>
            </h2>
            <div className="text-xs text-secondary">By {post.author} {post.createdAt && (
              <span>· {new Date(post.createdAt).toLocaleDateString()}</span>
            )}</div>
          </div>
        </div>
        <p className="text-sm text-secondary mb-2">{truncatedBody}</p>
      </div>
    </div>
  );
}
