import React from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style.js";
import SectionWrapper from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const blogs = [
    {
        title: "Why you need a home server",
        description: "A guide to setting up and securely managing home servers using old hardware, Cloudflare, SSH, and Docker.",
        tags: [{ name: "Linux", color: "text-blue-500" }, { name: "Cloudflare", color: "text-yellow-500" },{ name: "Docker", color: "text-red-500" },{ name: "Cloud Computing", color: "text-green-500" }],
        link: "https://medium.com/@ayushlanka106/why-you-need-a-home-server-82ff58fa41ca",
    },
    {
        title: "A Comprehensive Guide to Setting Up Multiple Test Environments and Automating CI/CD with GitHub Actions",
        description: "A step-by-step guide to setting up dev, test, and prod environments with automated CI/CD pipelines using GitHub Actions.",
        tags: [{ name: "CI/CD", color: "text-green-500" }, { name: "Github Actions", color: "text-pink-500" }],
        link: "https://medium.com/@ayushlanka106/setting-up-multiple-test-environments-a-guide-from-dev-to-prod-c4ab3a32ac78",
    },
    {
        title: "Principles of Software Development: Building Better, More Maintainable Code",
        description: "Principles of Software Development: Building Better, More Maintainable Code",
        tags: [{ name: "Java", color: "text-purple-500" }, { name: "Object-Oriented", color: "text-yellow-500" }],
        link: "https://medium.com/@ayushlanka106/principles-of-software-development-building-better-more-maintainable-code-cb9efa9b4238",
    },
];

const BlogCard = ({
    index,
    title,
    description,
    tags,
    link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                        <p
                            key={`${title}-${tag.name}-${index}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>

                <div className='mt-5'>
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='text-white underline'
    >
        Read More
    </a>
</div>

            </Tilt>
        </motion.div>
    );
};

const Blogs = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    My Thoughts
                </p>
                <h2 className={styles.sectionHeadText}>
                    Blogs.
                </h2>
            </motion.div>
            <div className={"w-full flex"}>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className={"mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"}
                >
                    Here are some of the blogs I have written, sharing insights, ideas, and experiences. Each blog post is briefly described with a link to read the full article.
                </motion.p>
            </div>
            <div className={"mt-20 flex flex-wrap gap-7"}>
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={"blog-key-" + index}
                        index={index}
                        {...blog}
                    />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(Blogs, "blogs");
