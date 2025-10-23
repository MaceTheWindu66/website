
export interface Project {
    title: string;
    description: string;
    image: string;
    tags: [string];
    link: string;
}


export default function ProjectCard ({
    title,
    description,
    image,
    tags,
    link,
}: Project) {
    return(
        <article className="group relative grid grid-rows-[auto_1fr_auto] rounded-2xl border border-zinc-200/70 bg-white shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900" aria-label={title}>
            <div className="aspect-video overflow-hidden rounded-t-2xl bg-zinc-100 dark:bg-zinc-800">
                <img
                src={image}
                alt={`${title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>
            <div className="p-4 sm:p-5">
                <h3 className="mb-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
                </p>            

                {tags?.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="tags">
                    {tags.map((t) => (
                    <li
                        key={t}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700
                                dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-200"
                    >
                        {t}
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </article>

    )
};