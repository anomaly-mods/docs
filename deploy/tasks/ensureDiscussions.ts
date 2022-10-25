import glob from 'glob';
import fs from 'fs';
import path from 'path';
import { GitHub } from 'github-graphql-api';
import matter from 'gray-matter';

const github = new GitHub({ token: '' })

const repoId = "";
const categoryId = "";

function getBlogFiles() {
    return glob.sync('blog/*/*.mdx');
}

const getDiscussions = async (username) => {
    const result = await github.query(`
query MyQuery {
  repository(name: "docs", owner: "anomaly-mods") {
    discussions(first: 100) {
      nodes {
        title
        number
      }
    }
  }
}
`);
    return result.repository.discussions.nodes.map(
        d => ({ [d.title]: d.number })
    )
        .reduce((acc, curr) => ({ ...acc, ...curr }), {});
}

const createDiscussion = async (title, body) => {
    return await github.query(`
mutation MyMutation {
  createDiscussion(
    input: {title: "${title}", body: "${body}", categoryId: "${categoryId}", repositoryId: "${repoId}"}
  ) {
    discussion {
      number
    }
  }
}
`)
}

export async function ensureDiscussions() {
    const discussions = await getDiscussions('anomaly-mods');

    const blogFiles = getBlogFiles().map(
        filename => {
            const fileContents = fs.readFileSync(filename, 'utf8')
            const { data } = matter(fileContents);
            return data;
        }
    )

    for (const meta of blogFiles) {
        const discussion = discussions[meta.title];

        if (!discussion) {
            const result = await createDiscussion(meta.title, "https://anomaly-mods.github.io/docs/blog/" + meta.slug);
            const number = result.createDiscussion.discussion.number;
            discussions[meta.title] = number;

            console.log(`Created discussion ${number} for ${meta.title}`);
        }
    }

    // write discussions to src/components/Discussion/posts.json
    const data = JSON.stringify(discussions, null, 2);
    fs.writeFileSync(path.join(process.cwd(), 'src/components/Discussion/discussions.json'), data);
}