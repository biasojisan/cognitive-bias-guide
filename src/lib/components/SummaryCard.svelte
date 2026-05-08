<script lang="ts">
	// 1. まずテーマの定義をオブジェクトで作る
	const themeMap = {
		orange: {
			outer: "from-orange-500 via-orange-600 to-orange-700",
			inner: "border-orange-300/50 bg-orange-600",
			text: "text-orange-600"
		},
		blue: {
			outer: "from-blue-500 via-blue-600 to-blue-700",
			inner: "border-blue-300/50 bg-blue-600",
			text: "text-blue-600"
		}
	} as const; // as const を付けることで型が固定

	// 2. themeMapのキー（"orange" | "blue"）を型として抽出
	type ThemeColor = keyof typeof themeMap;

	// 3. propsの型定義で color を ThemeColor 型にする
	let { 
		label = "簡単に言うと", 
		content, 
		color = "orange" 
	}: { 
		label?: string, 
		content: string, 
		color?: ThemeColor 
	} = $props();

	// これでエラーが消えます
	let style = $derived(themeMap[color]);
</script>

<div class="mt-10 rounded-3xl border-2 border-white/20 bg-gradient-to-br p-3 text-white shadow-xl {style.outer}">
	<div class="rounded-[1.4rem] border-8 border-dashed p-8 {style.inner}">
		<div class="flex flex-col items-center gap-2">
			<span class="rounded-full bg-white px-3 pt-2 pb-1 text-base font-black tracking-widest uppercase {style.text}">
				{@html label}
			</span>
			<div class="text-center text-2xl leading-relaxed font-extrabold drop-shadow-md md:text-3xl">
				{@html content}
			</div>
		</div>
	</div>
</div>
