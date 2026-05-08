<script lang="ts">
	import { Card } from "flowbite-svelte";


    let { id, name, summary, thumbnail } = $props<{id: number, name: string, summary: string, thumbnail: string}>();

</script>

<Card 
    img="/images/{thumbnail}" 
    href="/bias/{id}" 
    size="xs" 
    class="flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-gray-50 dark:bg-gray-800"
>
    <div class="p-5 flex flex-col flex-grow">
        <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {@html name}
        </div>
        <p class="mb-4 font-normal dark:text-gray-400 line-clamp-3 leading-relaxed">
            {@html summary}
        </p>
        <div class="mt-auto pt-4 flex justify-end">
            <span class="text-pink-700 font-medium inline-flex items-center group">
                <ruby>詳<rt>くわ</rt></ruby>しく<ruby>見<rt>み</rt></ruby>る 
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </span>
        </div>
    </div>
</Card>