<script lang="ts">
	import { Heading, Listgroup, ListgroupItem } from "flowbite-svelte";

    type Item = {link: string, title:string};
    type Props = {
        baseLink: string,
        items: Item[]
    }

    let {baseLink, items}: Props = $props();
</script>

<nav class="bg-gray-50 p-4 mx-auto max-w-2xl">
    <Heading tag="h4" class="mb-4">
        <ruby>目次<rt>もくじ</rt></ruby>
    </Heading>
    <Listgroup>
        {#each items as item}
            <li>
                <ListgroupItem
                    href={baseLink + "/#" + item.link}
                    class="block text-base text-blue-600 underline 
        decoration-blue-400/50 transition-colors 
        duration-200 hover:text-blue-800 hover:decoration-blue-600
        dark:text-blue-400 dark:hover:text-blue-300"
                >
                    {@html item.title}
                </ListgroupItem>
            </li>
        {/each}
    </Listgroup>
</nav>