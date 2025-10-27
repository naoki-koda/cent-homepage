import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  items?: string[];
  href: string;
  Icon: IconType;
}

export function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  items = [],
  href,
  Icon,
}: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* 画像エリア（踏襲） */}
      <div className="relative h-40 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* コンテンツエリア（踏襲） */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Icon className="h-6 w-6 text-sky-700" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        <p className="mt-2 text-slate-600">{description}</p>

        {items.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-slate-600">
            {items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <Button asChild variant="ghost" className="px-0 text-sky-700 hover:text-sky-800">
            <Link href={href}>詳しく見る</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}