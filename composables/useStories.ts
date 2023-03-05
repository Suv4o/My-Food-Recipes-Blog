const state = reactive({
    stories: [] as Story[],
    totalNumberOfStories: 0,
});

export interface Stories {
    data: {
        stories: [
            {
                alternates: string[];
                content: {
                    [index: string]: any;
                };
                created_at: string;
                full_slug: string;
                group_id: string;
                id: number;
                is_startpage: boolean;
                meta_data: any;
                name: string;
                parent_id: number;
                position: number;
                published_at: string | null;
                slug: string;
                sort_by_date: string | null;
                tag_list: string[];
                uuid: string;
            }
        ];
    };
    perPage: number;
    total: number;
    headers: any;
}

type Story = Stories["data"]["stories"][0];

export function useStories() {
    const timestamp = Date.now();
    const config = useRuntimeConfig();
    const storyblokApi = useStoryblokApi();

    async function fetchStories(options = {}) {
        try {
            const inspirationGalleries = (await storyblokApi.get(`cdn/stories`, {
                ...options,
                version: `draft`,
            })) as Stories;
            const { data, total } = inspirationGalleries;
            state.totalNumberOfStories = total;
            state.stories = data.stories;
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchStoriesBySlug(slug: string) {
        try {
            const story = await useAsyncStoryblok(slug, {
                version: "draft",
            });
            return story;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        ...toRefs(state),
        fetchStories,
        fetchStoriesBySlug,
    };
}
